import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarUpdateOneRequiredWithoutTransactionSalesNestedInput } from '../car/car-update-one-required-without-transaction-sales-nested.input';

@InputType()
export class TransactionSalesUpdateWithoutUserInput {

    @Field(() => CarUpdateOneRequiredWithoutTransactionSalesNestedInput, {nullable:true})
    Car?: CarUpdateOneRequiredWithoutTransactionSalesNestedInput;
}
