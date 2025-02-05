import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarUpdateWithoutTransactionSalesInput } from './car-update-without-transaction-sales.input';
import { Type } from 'class-transformer';
import { CarCreateWithoutTransactionSalesInput } from './car-create-without-transaction-sales.input';
import { CarWhereInput } from './car-where.input';

@InputType()
export class CarUpsertWithoutTransactionSalesInput {

    @Field(() => CarUpdateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => CarUpdateWithoutTransactionSalesInput)
    update!: CarUpdateWithoutTransactionSalesInput;

    @Field(() => CarCreateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => CarCreateWithoutTransactionSalesInput)
    create!: CarCreateWithoutTransactionSalesInput;

    @Field(() => CarWhereInput, {nullable:true})
    @Type(() => CarWhereInput)
    where?: CarWhereInput;
}
