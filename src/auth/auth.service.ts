import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';

@Injectable()
export class AuthService {
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
    return { success: true, data: registerDto };
  }
}
