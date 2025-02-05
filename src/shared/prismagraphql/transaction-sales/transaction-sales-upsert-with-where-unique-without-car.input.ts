import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionSalesUpdateWithoutCarInput } from './transaction-sales-update-without-car.input';
import { TransactionSalesCreateWithoutCarInput } from './transaction-sales-create-without-car.input';

@InputType()
export class TransactionSalesUpsertWithWhereUniqueWithoutCarInput {

    @Field(() => TransactionSalesWhereUniqueInput, {nullable:false})
    @Type(() => TransactionSalesWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>;

    @Field(() => TransactionSalesUpdateWithoutCarInput, {nullable:false})
    @Type(() => TransactionSalesUpdateWithoutCarInput)
    update!: TransactionSalesUpdateWithoutCarInput;

    @Field(() => TransactionSalesCreateWithoutCarInput, {nullable:false})
    @Type(() => TransactionSalesCreateWithoutCarInput)
    create!: TransactionSalesCreateWithoutCarInput;
}
