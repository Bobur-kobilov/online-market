import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserControllerController {
  @Post()
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