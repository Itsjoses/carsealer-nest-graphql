import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutTransactionSalesNestedInput } from '../user/user-update-one-required-without-transaction-sales-nested.input';
import { CarUpdateOneRequiredWithoutTransactionSalesNestedInput } from '../car/car-update-one-required-without-transaction-sales-nested.input';

@InputType()
export class TransactionSalesUpdateInput {

    @Field(() => UserUpdateOneRequiredWithoutTransactionSalesNestedInput, {nullable:true})
    User?: UserUpdateOneRequiredWithoutTransactionSalesNestedInput;

    @Field(() => CarUpdateOneRequiredWithoutTransactionSalesNestedInput, {nullable:true})
    Car?: CarUpdateOneRequiredWithoutTransactionSalesNestedInput;
}
