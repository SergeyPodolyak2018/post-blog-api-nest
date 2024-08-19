import { ApiProperty } from '@nestjs/swagger';

export class ResponseBlogDto {
  @ApiProperty({ description: 'Post id in db', nullable: false })
  _id: string;
  @ApiProperty({ description: 'Db internal field', nullable: false })
  _v: string;
  @ApiProperty({ description: 'Post title', nullable: false })
  title: string;
  @ApiProperty({ description: 'Post description', nullable: false })
  description: string;
  @ApiProperty({ description: 'Post image linck', nullable: false })
  image: string;
  @ApiProperty({ description: 'Post article', nullable: false })
  article: string;
}
