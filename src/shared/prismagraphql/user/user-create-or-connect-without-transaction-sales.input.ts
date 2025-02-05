import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTransactionSalesInput } from './user-create-without-transaction-sales.input';

@InputType()
export class UserCreateOrConnectWithoutTransactionSalesInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserCreateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => UserCreateWithoutTransactionSalesInput)
    create!: UserCreateWithoutTransactionSalesInput;
}
