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
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ResponseBlogDto } from './dto/response.blog.dto';

@ApiTags('Blog')
@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post('create')
  @ApiOperation({ summary: 'Create a post' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Created',
    type: ResponseBlogDto,
  })
  async create(@Body() dto: CreateBlogDto) {
    return this.blogService.create(dto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get post by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ResponseBlogDto,
  })
  async getBlogById(@Param('id') blogId: string) {
    const result = await this.blogService.findById(blogId);
    if (!result) {
      throw new HttpException(CONST_MESSAGES.NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return result;
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get all posts' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: [ResponseBlogDto],
  })
  async getAllBlogs() {
    return this.blogService.findAll();
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete post by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ResponseBlogDto,
  })
  async delete(@Param('id') id: string) {
    const deletedBlog = await this.blogService.deleteById(id);
    if (!deletedBlog) {
      throw new HttpException(CONST_MESSAGES.NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return deletedBlog;
    }
  }
  @Put(':id')
  @ApiOperation({ summary: 'Update post by id' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Success',
    type: ResponseBlogDto,
  })
  async putById(@Param('id') id: string, @Body() dto: CreateBlogDto) {
    const updatedBlog = await this.blogService.update(id, dto);
    if (!updatedBlog) {
      throw new HttpException(CONST_MESSAGES.NOT_FOUND, HttpStatus.NOT_FOUND);
    } else {
      return updatedBlog;
    }
  }
}
