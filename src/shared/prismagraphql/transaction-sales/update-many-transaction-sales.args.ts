import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionSalesUncheckedUpdateManyInput } from './transaction-sales-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { TransactionSalesWhereInput } from './transaction-sales-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyTransactionSalesArgs {

    @Field(() => TransactionSalesUncheckedUpdateManyInput, {nullable:false})
    @Type(() => TransactionSalesUncheckedUpdateManyInput)
    data!: TransactionSalesUncheckedUpdateManyInput;

    @Field(() => TransactionSalesWhereInput, {nullable:true})
    @Type(() => TransactionSalesWhereInput)
    where?: TransactionSalesWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
