import { Injectable, BadRequestException } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import * as AWS from 'aws-sdk';
import { ConfigService } from '@nestjs/config';
import { EmailOwnerDTO } from './dtos/emailOwner.dto';
import { EmailSubDTO } from './dtos/emailSub.dto';
import { Image } from './models/image';
import { S3Response } from './models/imageLink';

@Injectable()
export class CommonService {
  private sgMail;
  private S3;
  constructor(private configService: ConfigService) {
    this.sgMail = sgMail;
    this.sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    this.S3 = new AWS.S3({
      accessKeyId: process.env.AWS_SECRET,
      secretAccessKey: process.env.AWS_ACCESS_KEY,
    });
  }
  emailOwner(emailOwnerDTO: EmailOwnerDTO) {
    const { to, from, templateId, title, editUrl } = emailOwnerDTO;
    const msg = {
      to,
      from,
      templateId,
      // eslint-disable-next-line @typescript-eslint/camelcase
      dynamic_template_data: {
        title,
        editUrl,
      },
    };
    this.sgMail.send(msg);
  }
  emailSub(emailSubDTO: EmailSubDTO) {
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
    // console.log(encoding, mimetype, buffer, size, originalname);
    // this.AWS.upload(file);
  }
}
