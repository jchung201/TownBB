import { IncomingMessage, ServerResponse } from 'http';
import { Controller, Get, Req, Res } from '@nestjs/common';
import { NextService } from '@nestpress/next';

@Controller()
export class AppController {
  constructor(private readonly next: NextService) {}

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

  @Get('posts')
  public async showPosts(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.next.render('/posts', req, res);
  }

  @Get('posts/:id')
  public async showPost(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.next.render('/posts/:id', req, res);
  }

  @Get('create')
  public async createPost(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.next.render('/create', req, res);
  }

  @Get('edit/:id')
  public async editPost(
    @Req() req: IncomingMessage,
    @Res() res: ServerResponse,
  ) {
    await this.next.render('/edit/:id', req, res);
  }
}
