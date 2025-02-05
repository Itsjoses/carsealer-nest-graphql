import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutTransactionSalesInput } from './user-update-without-transaction-sales.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutTransactionSalesInput } from './user-create-without-transaction-sales.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutTransactionSalesInput {

    @Field(() => UserUpdateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => UserUpdateWithoutTransactionSalesInput)
    update!: UserUpdateWithoutTransactionSalesInput;

    @Field(() => UserCreateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => UserCreateWithoutTransactionSalesInput)
    create!: UserCreateWithoutTransactionSalesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
