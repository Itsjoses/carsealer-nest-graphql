import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionSalesWhereInput } from './transaction-sales-where.input';
import { Type } from 'class-transformer';
import { TransactionSalesOrderByWithRelationInput } from './transaction-sales-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';
import { Int } from '@nestjs/graphql';
import { TransactionSalesScalarFieldEnum } from './transaction-sales-scalar-field.enum';

@ArgsType()
export class FindFirstTransactionSalesOrThrowArgs {

    @Field(() => TransactionSalesWhereInput, {nullable:true})
    @Type(() => TransactionSalesWhereInput)
    where?: TransactionSalesWhereInput;

    @Field(() => [TransactionSalesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TransactionSalesOrderByWithRelationInput>;

    @Field(() => TransactionSalesWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [TransactionSalesScalarFieldEnum], {nullable:true})
    distinct?: Array<`${TransactionSalesScalarFieldEnum}`>;
}
