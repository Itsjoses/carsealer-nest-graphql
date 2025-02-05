import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionSalesUpdateInput } from './transaction-sales-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';

@ArgsType()
export class UpdateOneTransactionSalesArgs {

    @Field(() => TransactionSalesUpdateInput, {nullable:false})
    @Type(() => TransactionSalesUpdateInput)
    data!: TransactionSalesUpdateInput;

    @Field(() => TransactionSalesWhereUniqueInput, {nullable:false})
    @Type(() => TransactionSalesWhereUniqueInput)
    where!: Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>;
}
