import { IncomingMessage, ServerResponse } from 'http';
import { Controller, Get, Req, Res, ParseIntPipe, Param } from '@nestjs/common';
import { NextService } from '@nestpress/next';
import { AdsService } from './ads/ads.service';

@Controller()
export class AppController {
  constructor(
    private readonly next: NextService,
    private readonly adsService: AdsService,
  ) {}

  @Get()
  public async showHome(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.next.render('/index', req, res);
  }

  @Get('categories')
  public async getCategories(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.next.render('/categories', req, res);
  }
  @Get('categories/:id')
  public async getCategory(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @Param('id') id: string,
  ) {
    await this.next.render(`/categories/${id}`, req, res);
  }
  @Get('categories/:id/:sub')
  public async getCategorySub(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @Param('id') id: string,
    @Param('sub') sub: string,
  ) {
    await this.next.render(`/categories/${id}/${sub}`, req, res);
  }

  @Get('posts/:id')
  public async showPost(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @Param('id', ParseIntPipe) id: number,
  ) {
    await this.next.render(`/posts/${id}`, req, res);
  }

  @Get('create')
  public async createPost(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.next.render('/create', req, res);
  }

  @Get('edit/:id/:hash')
  public async editPost(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @Param('id', ParseIntPipe) id: number,
    @Param('hash') hash: string,
  ) {
    await this.next.render(`/edit/${id}/${hash}`, req, res);
  }

  @Get('unsub/:id/:hash')
  public async unSub(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
    @Param('id', ParseIntPipe) id: number,
    @Param('hash') hash: string,
  ) {
    await this.next.render(`/unsub/${id}/${hash}`, req, res);
  }
}
