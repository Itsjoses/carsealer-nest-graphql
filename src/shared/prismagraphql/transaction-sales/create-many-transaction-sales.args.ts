import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionSalesCreateManyInput } from './transaction-sales-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyTransactionSalesArgs {

    @Field(() => [TransactionSalesCreateManyInput], {nullable:false})
    @Type(() => TransactionSalesCreateManyInput)
    data!: Array<TransactionSalesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
