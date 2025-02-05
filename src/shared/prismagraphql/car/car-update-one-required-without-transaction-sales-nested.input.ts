import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarCreateWithoutTransactionSalesInput } from './car-create-without-transaction-sales.input';
import { Type } from 'class-transformer';
import { CarCreateOrConnectWithoutTransactionSalesInput } from './car-create-or-connect-without-transaction-sales.input';
import { CarUpsertWithoutTransactionSalesInput } from './car-upsert-without-transaction-sales.input';
import { Prisma } from '@prisma/client';
import { CarWhereUniqueInput } from './car-where-unique.input';
import { CarUpdateToOneWithWhereWithoutTransactionSalesInput } from './car-update-to-one-with-where-without-transaction-sales.input';

@InputType()
export class CarUpdateOneRequiredWithoutTransactionSalesNestedInput {

    @Field(() => CarCreateWithoutTransactionSalesInput, {nullable:true})
    @Type(() => CarCreateWithoutTransactionSalesInput)
    create?: CarCreateWithoutTransactionSalesInput;

    @Field(() => CarCreateOrConnectWithoutTransactionSalesInput, {nullable:true})
    @Type(() => CarCreateOrConnectWithoutTransactionSalesInput)
    connectOrCreate?: CarCreateOrConnectWithoutTransactionSalesInput;

    @Field(() => CarUpsertWithoutTransactionSalesInput, {nullable:true})
    @Type(() => CarUpsertWithoutTransactionSalesInput)
    upsert?: CarUpsertWithoutTransactionSalesInput;

    @Field(() => CarWhereUniqueInput, {nullable:true})
    @Type(() => CarWhereUniqueInput)
    connect?: Prisma.AtLeast<CarWhereUniqueInput, 'id'>;

    @Field(() => CarUpdateToOneWithWhereWithoutTransactionSalesInput, {nullable:true})
    @Type(() => CarUpdateToOneWithWhereWithoutTransactionSalesInput)
    update?: CarUpdateToOneWithWhereWithoutTransactionSalesInput;
}
