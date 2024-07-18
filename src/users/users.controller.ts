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

@Controller('users')

// this are the routes wwe want to create
export class UsersController {
  @Get() //  GET /users
  findAll(@Query('role') role?: 'ADMIN' | 'INTERN' | 'SENIORMAN') {
    return [
      {
        role,
      },
    ];
  }

  @Get(':id') //  GET /users/:id
  findOne(@Param('id') id: string) {
    return [id];
  }

  @Post() //  POST /users
  create(@Body() users: {}) {
    return { users };
  }

  @Patch(':id') //  Patch /users/:id
  update(@Param('id') id: string, @Body() userUpdate: {}) {
    return { id, ...userUpdate };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return {
      id,
    };
  }
}
