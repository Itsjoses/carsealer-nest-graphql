import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarCreateWithoutTransactionSalesInput } from './car-create-without-transaction-sales.input';
import { Type } from 'class-transformer';
import { CarCreateOrConnectWithoutTransactionSalesInput } from './car-create-or-connect-without-transaction-sales.input';
import { Prisma } from '@prisma/client';
import { CarWhereUniqueInput } from './car-where-unique.input';

@InputType()
export class CarCreateNestedOneWithoutTransactionSalesInput {

    @Field(() => CarCreateWithoutTransactionSalesInput, {nullable:true})
    @Type(() => CarCreateWithoutTransactionSalesInput)
    create?: CarCreateWithoutTransactionSalesInput;

    @Field(() => CarCreateOrConnectWithoutTransactionSalesInput, {nullable:true})
    @Type(() => CarCreateOrConnectWithoutTransactionSalesInput)
    connectOrCreate?: CarCreateOrConnectWithoutTransactionSalesInput;

    @Field(() => CarWhereUniqueInput, {nullable:true})
    @Type(() => CarWhereUniqueInput)
    connect?: Prisma.AtLeast<CarWhereUniqueInput, 'id'>;
}
