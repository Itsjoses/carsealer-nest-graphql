import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateNestedManyWithoutCarInput } from '../transaction-sales/transaction-sales-create-nested-many-without-car.input';

@InputType()
export class CarCreateWithoutCarTypeInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => TransactionSalesCreateNestedManyWithoutCarInput, {nullable:true})
    transactionSales?: TransactionSalesCreateNestedManyWithoutCarInput;
}
