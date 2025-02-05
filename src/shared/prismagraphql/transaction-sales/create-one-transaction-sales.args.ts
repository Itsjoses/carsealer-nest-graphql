import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionSalesCreateInput } from './transaction-sales-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneTransactionSalesArgs {

    @Field(() => TransactionSalesCreateInput, {nullable:false})
    @Type(() => TransactionSalesCreateInput)
    data!: TransactionSalesCreateInput;
}
