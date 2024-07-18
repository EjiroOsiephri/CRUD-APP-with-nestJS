import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Query,
  Param,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get() //  GET /users
  findAll(@Query('role') role?: 'ADMIN' | 'INTERN' | 'ENGINEER') {
    return this.usersService.findAll(role);
  }

  @Get(':id') //  GET /users/:id
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post() //  POST /users
  create(
    @Body()
    user: {
      name: string;
      email: string;
      role: 'ENGINEER' | 'INTERN' | 'ADMIN';
    },
  ) {
    return this.usersService.create(user);
  }

  @Patch(':id') //  Patch /users/:id
  update(
    @Param('id') id: string,
    @Body()
    updatedUser: {
      name?: string;
      email?: string;
      role?: 'ENGINEER' | 'INTERN' | 'ADMIN';
    },
  ) {
    return this.usersService.update(+id, updatedUser);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
