import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';
import { EmailCreateAdDTO } from './dtos/emailCreateAd.dto';

@Injectable()
export class CommonService {
  private sgMail;
  constructor(private configService: ConfigService) {
    this.sgMail = sgMail;
    this.sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  }

  emailOwner(emailCreateAd: EmailCreateAdDTO) {
    const { to, from, templateId, title, editUrl } = emailCreateAd;
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
}
