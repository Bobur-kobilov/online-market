import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user-controller')
export class UserControllerController {
  @Post('user')
  createUser(data) {
    console.log(data)
    return 'created'
  }
  @Get('user/:id')
  getUserInfo() {
    return 'info'
  }
  @Put('user/:id')
  updateUser(data) {
    return 'updated'
  }
  @Delete('user/:id')
  deleteUser() {
    return 'deleted'
  }
}
