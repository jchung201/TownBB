import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Query,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommonService } from './common.service';
import { S3Response } from './models/s3Response';

@Controller('common')
export class CommonController {
  constructor(private commonService: CommonService) {}

  @Post('/upload/image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() image): Promise<S3Response> {
    return this.commonService.uploadImage(image);
  }

  @Get('/location')
  async getLocation(@Query('location') location: string): Promise<void> {
    return this.commonService.getLocation(location);
  }
}
