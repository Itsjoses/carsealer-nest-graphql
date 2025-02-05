import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CarWhereUniqueInput } from './car-where-unique.input';
import { Type } from 'class-transformer';
import { CarCreateWithoutTransactionSalesInput } from './car-create-without-transaction-sales.input';

@InputType()
export class CarCreateOrConnectWithoutTransactionSalesInput {

    @Field(() => CarWhereUniqueInput, {nullable:false})
    @Type(() => CarWhereUniqueInput)
    where!: Prisma.AtLeast<CarWhereUniqueInput, 'id'>;

    @Field(() => CarCreateWithoutTransactionSalesInput, {nullable:false})
    @Type(() => CarCreateWithoutTransactionSalesInput)
    create!: CarCreateWithoutTransactionSalesInput;
}
