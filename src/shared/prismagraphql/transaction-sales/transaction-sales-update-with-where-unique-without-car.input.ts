import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionSalesUpdateWithoutCarInput } from './transaction-sales-update-without-car.input';

@InputType()
export class TransactionSalesUpdateWithWhereUniqueWithoutCarInput {

    @Field(() => TransactionSalesWhereUniqueInput, {nullable:false})
    @Type(() => TransactionSalesWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>;

    @Field(() => TransactionSalesUpdateWithoutCarInput, {nullable:false})
    @Type(() => TransactionSalesUpdateWithoutCarInput)
    data!: TransactionSalesUpdateWithoutCarInput;
}
