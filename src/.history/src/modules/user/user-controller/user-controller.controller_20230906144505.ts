import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

@Controller('user')
export class UserControllerController {
  @Post()
  createUser() {
    return 'created'
  }
  @Get('/:id')
  getInfo() {
    return 'info'
  }
  @Put('/:id')
  update() {
    return 'updated'
  }
  @Delete('/:id')
  deleteUser() {
    return 'deleted'
  }
}