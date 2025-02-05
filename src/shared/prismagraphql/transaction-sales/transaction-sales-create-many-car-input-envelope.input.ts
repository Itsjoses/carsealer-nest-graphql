import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateManyCarInput } from './transaction-sales-create-many-car.input';
import { Type } from 'class-transformer';

@InputType()
export class TransactionSalesCreateManyCarInputEnvelope {

    @Field(() => [TransactionSalesCreateManyCarInput], {nullable:false})
    @Type(() => TransactionSalesCreateManyCarInput)
    data!: Array<TransactionSalesCreateManyCarInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
