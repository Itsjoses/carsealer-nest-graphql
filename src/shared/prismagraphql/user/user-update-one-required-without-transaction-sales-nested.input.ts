import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutTransactionSalesInput } from './user-create-without-transaction-sales.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutTransactionSalesInput } from './user-create-or-connect-without-transaction-sales.input';
import { UserUpsertWithoutTransactionSalesInput } from './user-upsert-without-transaction-sales.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutTransactionSalesInput } from './user-update-to-one-with-where-without-transaction-sales.input';

@InputType()
export class UserUpdateOneRequiredWithoutTransactionSalesNestedInput {

    @Field(() => UserCreateWithoutTransactionSalesInput, {nullable:true})
    @Type(() => UserCreateWithoutTransactionSalesInput)
    create?: UserCreateWithoutTransactionSalesInput;

    @Field(() => UserCreateOrConnectWithoutTransactionSalesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutTransactionSalesInput)
    connectOrCreate?: UserCreateOrConnectWithoutTransactionSalesInput;

    @Field(() => UserUpsertWithoutTransactionSalesInput, {nullable:true})
    @Type(() => UserUpsertWithoutTransactionSalesInput)
    upsert?: UserUpsertWithoutTransactionSalesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id'>;

    @Field(() => UserUpdateToOneWithWhereWithoutTransactionSalesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutTransactionSalesInput)
    update?: UserUpdateToOneWithWhereWithoutTransactionSalesInput;
}
