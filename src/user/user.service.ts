import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserByEmamil(email: string) {
    // logic of database
    return { email };
  }
}