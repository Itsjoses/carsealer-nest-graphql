import { registerEnumType } from '@nestjs/graphql';

export enum UserOrderByRelevanceFieldEnum {
    email = "email",
    name = "name",
    password = "password"
}


registerEnumType(UserOrderByRelevanceFieldEnum, { name: 'UserOrderByRelevanceFieldEnum', description: undefined })
