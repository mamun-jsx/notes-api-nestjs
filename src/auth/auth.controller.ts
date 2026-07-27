import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/register')
  register(@Body() registerDto: RegisterDto) {
    // register logic come from service
    // send the Data_Schema as Dto to service layer
    return this.authService.register(registerDto);
  }
}
