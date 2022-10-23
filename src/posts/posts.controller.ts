import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get("get-post")
    getPosts() {
        return 'a single post';
    }
}
