import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class UserCreateResponse {
  @Field()
  username: string;

  @Field()
  jwt: string;
}
