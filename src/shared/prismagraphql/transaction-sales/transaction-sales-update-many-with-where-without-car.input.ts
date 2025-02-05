import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesScalarWhereInput } from './transaction-sales-scalar-where.input';
import { Type } from 'class-transformer';
import { TransactionSalesUncheckedUpdateManyWithoutCarInput } from './transaction-sales-unchecked-update-many-without-car.input';

@InputType()
export class TransactionSalesUpdateManyWithWhereWithoutCarInput {

    @Field(() => TransactionSalesScalarWhereInput, {nullable:false})
    @Type(() => TransactionSalesScalarWhereInput)
    where!: TransactionSalesScalarWhereInput;

    @Field(() => TransactionSalesUncheckedUpdateManyWithoutCarInput, {nullable:false})
    @Type(() => TransactionSalesUncheckedUpdateManyWithoutCarInput)
    data!: TransactionSalesUncheckedUpdateManyWithoutCarInput;
}
