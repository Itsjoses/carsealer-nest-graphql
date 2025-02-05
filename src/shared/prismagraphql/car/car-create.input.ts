import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeCreateNestedOneWithoutCarInput } from '../car-type/car-type-create-nested-one-without-car.input';
import { TransactionSalesCreateNestedManyWithoutCarInput } from '../transaction-sales/transaction-sales-create-nested-many-without-car.input';

@InputType()
export class CarCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CarTypeCreateNestedOneWithoutCarInput, {nullable:false})
    carType!: CarTypeCreateNestedOneWithoutCarInput;

    @Field(() => TransactionSalesCreateNestedManyWithoutCarInput, {nullable:true})
    transactionSales?: TransactionSalesCreateNestedManyWithoutCarInput;
}
