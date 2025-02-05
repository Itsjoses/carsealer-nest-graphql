import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutTransactionSalesInput } from './user-update-without-transaction-sales.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutTransactionSalesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => UserUpdateWithoutTransactionSalesInput)
    data!: UserUpdateWithoutTransactionSalesInput;
}
