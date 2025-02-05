import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTransactionSalesInput } from '../user/user-create-nested-one-without-transaction-sales.input';

@InputType()
export class TransactionSalesCreateWithoutCarInput {

    @Field(() => UserCreateNestedOneWithoutTransactionSalesInput, {nullable:false})
    User!: UserCreateNestedOneWithoutTransactionSalesInput;
}
