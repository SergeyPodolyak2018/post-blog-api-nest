import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Blog, BlogDocument } from './models/blog.model';
import { CreateBlogDto } from './dto/create.blog.dto';

@Injectable()
export class BlogService {
  constructor(
    @InjectModel(Blog.name)
    private readonly blogModel: Model<BlogDocument>,
  ) {}

  async create(dto: CreateBlogDto): Promise<Blog> {
    return this.blogModel.create(dto);
  }

  async deleteById(id: string): Promise<Blog | null> {
    return this.blogModel.findByIdAndDelete(id).exec();
  }

  async findById(id: string): Promise<Blog | null> {
    return this.blogModel.findById(id).exec();
  }

  async findAll(): Promise<Blog[]> {
    return this.blogModel.find({}).exec();
  }

  async update(id: string, dto: CreateBlogDto): Promise<Blog | null> {
    const filter = { _id: id };
    return this.blogModel.findOneAndUpdate(filter, dto).exec();
  }
}
