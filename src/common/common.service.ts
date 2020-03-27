import { Injectable } from '@nestjs/common';
import * as sgMail from '@sendgrid/mail';
import { ConfigService } from '@nestjs/config';
import { EmailOwnerDTO } from './dtos/emailOwner.dto';
import { EmailSubDTO } from './dtos/emailSub.dto';

@Injectable()
export class CommonService {
  private sgMail;
  constructor(private configService: ConfigService) {
    this.sgMail = sgMail;
    this.sgMail.setApiKey(process.env.SENDGRID_API_KEY);
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
}
