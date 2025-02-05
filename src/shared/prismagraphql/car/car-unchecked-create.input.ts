import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionSalesUncheckedCreateNestedManyWithoutCarInput } from '../transaction-sales/transaction-sales-unchecked-create-nested-many-without-car.input';

@InputType()
export class CarUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    carTypeId!: number;

    @Field(() => TransactionSalesUncheckedCreateNestedManyWithoutCarInput, {nullable:true})
    transactionSales?: TransactionSalesUncheckedCreateNestedManyWithoutCarInput;
}
