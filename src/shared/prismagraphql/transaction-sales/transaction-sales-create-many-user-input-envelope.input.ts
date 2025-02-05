import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateManyUserInput } from './transaction-sales-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionSalesCreateManyUserInputEnvelope {

    @Field(() => [TransactionSalesCreateManyUserInput], {nullable:false})
    @Type(() => TransactionSalesCreateManyUserInput)
    data!: Array<TransactionSalesCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
