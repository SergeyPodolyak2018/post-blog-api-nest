import { ApiProperty } from '@nestjs/swagger';

export class CreateBlogDto {
  @ApiProperty({ description: 'Post title', nullable: false })
  title: string;
  @ApiProperty({ description: 'Post description', nullable: false })
  description: string;
  @ApiProperty({ description: 'Post image linck', nullable: false })
  image: string;
  @ApiProperty({ description: 'Post article', nullable: false })
  article: string;
}
