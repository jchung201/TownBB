import { Injectable, BadRequestException } from '@nestjs/common';
import sgMail from '@sendgrid/mail';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { EmailOwnerDTO } from './dtos/emailOwner.dto';
import { EmailSubDTO } from './dtos/emailSub.dto';
import { Image } from './models/image';
import { S3Response } from './models/s3Response';
import { Client } from '@googlemaps/google-maps-services-js';
import { GetLocationDTO } from './dtos/getLocation';

@Injectable()
export class CommonService {
  private sgMail;
  private S3;
  private googleClient;
  constructor(private configService: ConfigService) {
    // Sendgrid SDK
    this.sgMail = sgMail;
    this.sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    // AWS SDK
    this.S3 = new AWS.S3({
      accessKeyId: process.env.AWS_SECRET,
      secretAccessKey: process.env.AWS_ACCESS_KEY,
    });
    // Google SDK
    this.googleClient = new Client({});
  }

  emailOwner(emailOwnerDTO: EmailOwnerDTO): void {
    const { to, from, templateId, title, editUrl, viewUrl } = emailOwnerDTO;
    const msg = {
      to,
      from,
      templateId,
      // eslint-disable-next-line @typescript-eslint/camelcase
      dynamic_template_data: {
        title,
        editUrl,
        viewUrl,
      },
    };
    this.sgMail.send(msg);
  }

  async emailSub(emailSubDTO: EmailSubDTO) {
    const {
      to,
      from,
      templateId,
      title,
      viewUrl,
      unsubUrl,
      category,
    } = emailSubDTO;
    const msg = {
      to,
      from,
      templateId,
      // eslint-disable-next-line @typescript-eslint/camelcase
      dynamic_template_data: {
        title,
        viewUrl,
        unsubUrl,
        category,
      },
    };
    this.sgMail.send(msg);
  }

  async uploadImage(image: Image): Promise<S3Response> {
    const { mimetype, buffer, size, originalname } = image;
    if (!mimetype.startsWith('image'))
      throw new BadRequestException('Incorrect fle type.');
    if (Number(size) > 10100640002)
      throw new BadRequestException('File too big!');
    const params = {
      Bucket: this.configService.get('S3_BUCKET_NAME'),
      Key: `images/${originalname}+${new Date()}`,
      ACL: 'public-read',
      Body: buffer,
    };
    const response = await this.S3.upload(params).promise();
    delete response.Bucket;
    delete response.key;
    delete response.Key;
    return response;
  }

  async getLocation(getLocationDTO: GetLocationDTO): Promise<any> {
    const { location } = getLocationDTO;
    const response = await this.googleClient.geocode({
      params: {
        address: location,
        key: process.env.GOOGLE_MAPS_KEY,
      },
      timeout: 1000, // milliseconds
    });
    if (response.data.status === 'ZERO_RESULTS') {
      throw new BadRequestException('Address not found!');
    }
    const foundAddress = response.data.results[0];
    return {
      formattedAddress: foundAddress.formatted_address,
      latitude: foundAddress.geometry.location.lat,
      longitude: foundAddress.geometry.location.lng,
    };
  }
}
