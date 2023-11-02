import { createParamDecorator } from '@nestjs/common';
import type { ExecutionContext } from '@nestjs/common';

export const Field = createParamDecorator((field: string, ctx: ExecutionContext) => {
  const { user } = ctx.switchToHttp().getRequest();

  console.log('field decorator user', user);

  if (field) {
    return user[field];
  }

  return user;
});
