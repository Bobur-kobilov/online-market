import { Controller, Post } from '@nestjs/common';

@Controller('user-controller')
export class UserControllerController {
  @Post('user')
  async createUser(data) {
    console.log(data)
    return 'created'
  }
}
