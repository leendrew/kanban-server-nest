import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import type { LoginDto, RefreshDto } from './dto';
import type { TokenResponse } from './jwt';
import type { CreateUserDto } from '../user/dto';
import type { User } from '../user/user.entity';

@Controller('/auth')
export class AuthController {
  constructor(private readonly service: AuthService) {}

  @Post('/register')
  register(@Body() dto: CreateUserDto): Promise<User> {
    return this.service.register(dto);
  }

  @Post('/login')
  login(@Body() dto: LoginDto): Promise<TokenResponse> {
    return this.service.login(dto);
  }

  @Post('/refresh')
  refresh(@Body() dto: RefreshDto): Promise<TokenResponse> {
    return this.service.refresh(dto);
  }
}
