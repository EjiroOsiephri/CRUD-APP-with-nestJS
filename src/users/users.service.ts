import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'INTERN' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'ADMIN' },
    { id: 3, name: 'Charlie', email: 'charlie@example.com', role: 'ENGINEER' },
    { id: 4, name: 'David', email: 'david@example.com', role: 'INTERN' },
    { id: 5, name: 'Eve', email: 'eve@example.com', role: 'ENGINEER' },
    { id: 6, name: 'Frank', email: 'frank@example.com', role: 'ADMIN' },
  ];

  findAll(role?: 'ENGINEER' | 'INTERN' | 'ADMIN') {
    if (role) {
      const filteredUser = this.users.filter((user) => user.role === role);
      return filteredUser;
    } else {
      return this.users;
    }
  }
  findOne(id: number) {
    const user = this.users.find((user) => user.id === id);
    return user;
  }
  create(user: CreateUserDto) {
    const userByHighestId = [...this.users].sort((a, b) => {
      return b.id - a.id;
    });
    const newUser = {
      id: userByHighestId[0].id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  update(id: number, updatedUser: UpdateUserDto) {
    this.users = this.users.map((user) => {
      if (user.id === id) {
        return { ...user, ...updatedUser };
      }
      return user;
    });
    return this.findOne(id);
  }
  delete(id: number) {
    const removedUser = this.findOne(id);

    this.users = this.users.filter((user) => user.id !== id);

    return removedUser;
  }
}
