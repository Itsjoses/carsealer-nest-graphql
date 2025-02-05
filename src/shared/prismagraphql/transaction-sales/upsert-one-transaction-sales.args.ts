import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';
import { Type } from 'class-transformer';
import { TransactionSalesCreateInput } from './transaction-sales-create.input';
import { TransactionSalesUpdateInput } from './transaction-sales-update.input';

@ArgsType()
export class UpsertOneTransactionSalesArgs {

    @Field(() => TransactionSalesWhereUniqueInput, {nullable:false})
    @Type(() => TransactionSalesWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>;

    @Field(() => TransactionSalesCreateInput, {nullable:false})
    @Type(() => TransactionSalesCreateInput)
    create!: TransactionSalesCreateInput;

    @Field(() => TransactionSalesUpdateInput, {nullable:false})
    @Type(() => TransactionSalesUpdateInput)
    update!: TransactionSalesUpdateInput;
}
