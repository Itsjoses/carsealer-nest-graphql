import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionSalesUpdateWithoutUserInput } from './transaction-sales-update-without-user.input';
import { TransactionSalesCreateWithoutUserInput } from './transaction-sales-create-without-user.input';

@InputType()
export class TransactionSalesUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => TransactionSalesWhereUniqueInput, {nullable:false})
    @Type(() => TransactionSalesWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>;

    @Field(() => TransactionSalesUpdateWithoutUserInput, {nullable:false})
    @Type(() => TransactionSalesUpdateWithoutUserInput)
    update!: TransactionSalesUpdateWithoutUserInput;

    @Field(() => TransactionSalesCreateWithoutUserInput, {nullable:false})
    @Type(() => TransactionSalesCreateWithoutUserInput)
    create!: TransactionSalesCreateWithoutUserInput;
}
