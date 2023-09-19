import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma-service';
import { _ } from 'lodash';

@Injectable()
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export class UserServiceService {
  constructor(private prisma: PrismaService) {}
  async user(data): Promise<string> {
    return (
      await this.prisma.user.create({
        data: data,
      })
    ).id.toString();
  }
  async get(id: bigint) {
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
  }
  async delete(id: bigint) {
    return (
      await this.prisma.user.delete({
        where: {
          id: id,
        },
      })
    ).id.toString();
  }
}
