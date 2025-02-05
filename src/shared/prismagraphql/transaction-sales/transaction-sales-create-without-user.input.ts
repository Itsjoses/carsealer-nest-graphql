import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarCreateNestedOneWithoutTransactionSalesInput } from '../car/car-create-nested-one-without-transaction-sales.input';

@InputType()
export class TransactionSalesCreateWithoutUserInput {

    @Field(() => CarCreateNestedOneWithoutTransactionSalesInput, {nullable:false})
    Car!: CarCreateNestedOneWithoutTransactionSalesInput;
}
