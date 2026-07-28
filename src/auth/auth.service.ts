import { UserService } from './../user/user.service';
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  register(registerDto: RegisterDto) {
    // return data;
    // all business logic needs to write here
    /***
     * Check email already exists ?
     * Hash the password
     * Create the user
     * Generate JWT token
     * Retuen token
     * */
    const user = this.userService.getUserByEmamil(registerDto.email);
    return user;
  }
}
