import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesWhereInput } from './transaction-sales-where.input';

@InputType()
export class TransactionSalesListRelationFilter {

    @Field(() => TransactionSalesWhereInput, {nullable:true})
    every?: TransactionSalesWhereInput;

    @Field(() => TransactionSalesWhereInput, {nullable:true})
    some?: TransactionSalesWhereInput;

    @Field(() => TransactionSalesWhereInput, {nullable:true})
    none?: TransactionSalesWhereInput;
}
