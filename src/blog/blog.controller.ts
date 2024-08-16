import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create.blog.dto';
import { CONST_MESSAGES } from './blog.const';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('create')
  async create(@Body() dto: CreateBlogDto) {
    return this.blogService.create(dto);
  }

  @Get(':id')
  async getBlogById(@Param('id') blogId: string) {
    const result = await this.blogService.findById(blogId);
    if (!result) {
      throw new HttpException(CONST_MESSAGES.NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return result;
    }
  }

  @Get()
  async getAllBlogs() {
    return this.blogService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deletedBlog = await this.blogService.deleteById(id);
    if (!deletedBlog) {
      throw new HttpException(CONST_MESSAGES.NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return deletedBlog;
    }
  }
  @Put(':id')
  async putById(@Param('id') id: string, @Body() dto: CreateBlogDto) {
    const updatedBlog = await this.blogService.update(id, dto);
    if (!updatedBlog) {
      throw new HttpException(CONST_MESSAGES.NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return updatedBlog;
    }
  }
}
