import { Module } from '@nestjs/common';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UserServiceService } from './user-service/user-service.service';
import { PrismaService } from 'prisma/prisma-service';

@Module({
  controllers: [UserControllerController],
  providers: [UserServiceService, PrismaService]
})
export class UserModule {}
