import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionSalesInput } from './user-create-without-transaction-sales.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTransactionSalesInput } from './user-create-or-connect-without-transaction-sales.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutTransactionSalesInput {

    @Field(() => UserCreateWithoutTransactionSalesInput, {nullable:true})
    @Type(() => UserCreateWithoutTransactionSalesInput)
    create?: UserCreateWithoutTransactionSalesInput;

    @Field(() => UserCreateOrConnectWithoutTransactionSalesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTransactionSalesInput)
    connectOrCreate?: UserCreateOrConnectWithoutTransactionSalesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;
}
