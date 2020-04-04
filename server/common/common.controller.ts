import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  Get,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CommonService } from './common.service';
import { S3Response } from './models/s3Response';
import { GetLocationDTO } from './dtos/getLocation';

@Controller('rest/common')
export class CommonController {
  constructor(private commonService: CommonService) {}

  @Post('/upload/image')
  @UseInterceptors(FileInterceptor('image'))
  async uploadFile(@UploadedFile() image): Promise<S3Response> {
    return this.commonService.uploadImage(image);
  }

  @Get('/location')
  @UsePipes(ValidationPipe)
  async getLocation(@Query() getLocationDTO: GetLocationDTO): Promise<any> {
    return this.commonService.getLocation(getLocationDTO);
  }
}
