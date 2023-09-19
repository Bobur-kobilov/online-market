import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserServiceService } from '../user-service/user-service.service';
import { _ } from 'lodash';

@Controller('user')
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserControllerController {
  constructor(private readonly userService: UserServiceService) {}
  @Post()
  createUser(@Body() data: { email: string; password: string }) {
    try {
      const start = _.now();
      let count = 0;
      const maxWait = 100000000000;
      while (count < maxWait) {
        count += 1;
      }
      console.log(count);
      const end = (_.now() - start) / 1000;
      console.log(end);
      return true;
      // return this.userService.user(data);
    } catch (e) {
      throw e;
    }
  }
  @Get('/:id')
  getInfo(@Param('id') id: number) {
    try {
      return this.userService.get(BigInt(id));
    } catch (e) {
      throw e;
    }
  }
  @Put('/:id')
  update() {
    return 'updated';
  }
  @Delete('/:id')
  deleteUser(@Param('id') id: number) {
    return this.userService.delete(BigInt(id));
  }
}
