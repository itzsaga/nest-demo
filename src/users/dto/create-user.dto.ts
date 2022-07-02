import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({
    description: 'The age of the user',
    minimum: 13,
  })
  age: number;
}
