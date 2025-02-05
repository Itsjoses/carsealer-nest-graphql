import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutTransactionSalesNestedInput } from '../user/user-update-one-required-without-transaction-sales-nested.input';

@InputType()
export class TransactionSalesUpdateWithoutCarInput {

    @Field(() => UserUpdateOneRequiredWithoutTransactionSalesNestedInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutTransactionSalesNestedInput;
}
