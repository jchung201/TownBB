import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommonService } from './common.service';
import { S3Response } from './models/imageLink';

@Controller('common')
export class CommonController {
  constructor(private commonService: CommonService) {}

  @Post('/upload/image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file): Promise<S3Response> {
    return this.commonService.uploadImage(file);
  }
}
