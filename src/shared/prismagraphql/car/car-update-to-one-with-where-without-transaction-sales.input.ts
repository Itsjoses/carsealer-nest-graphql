import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarWhereInput } from './car-where.input';
import { Type } from 'class-transformer';
import { CarUpdateWithoutTransactionSalesInput } from './car-update-without-transaction-sales.input';

@InputType()
export class CarUpdateToOneWithWhereWithoutTransactionSalesInput {

    @Field(() => CarWhereInput, {nullable:true})
    @Type(() => CarWhereInput)
    where?: CarWhereInput;

    @Field(() => CarUpdateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => CarUpdateWithoutTransactionSalesInput)
    data!: CarUpdateWithoutTransactionSalesInput;
}
