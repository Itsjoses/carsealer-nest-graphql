import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionSalesWhereInput } from './transaction-sales-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyTransactionSalesArgs {

    @Field(() => TransactionSalesWhereInput, {nullable:true})
    @Type(() => TransactionSalesWhereInput)
    where?: TransactionSalesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
