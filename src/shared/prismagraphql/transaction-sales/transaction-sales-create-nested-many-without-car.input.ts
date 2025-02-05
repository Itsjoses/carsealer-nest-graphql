import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateWithoutCarInput } from './transaction-sales-create-without-car.input';
import { Type } from 'class-transformer';
import { TransactionSalesCreateOrConnectWithoutCarInput } from './transaction-sales-create-or-connect-without-car.input';
import { TransactionSalesCreateManyCarInputEnvelope } from './transaction-sales-create-many-car-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';

@InputType()
export class TransactionSalesCreateNestedManyWithoutCarInput {

    @Field(() => [TransactionSalesCreateWithoutCarInput], {nullable:true})
    @Type(() => TransactionSalesCreateWithoutCarInput)
    create?: Array<TransactionSalesCreateWithoutCarInput>;

    @Field(() => [TransactionSalesCreateOrConnectWithoutCarInput], {nullable:true})
    @Type(() => TransactionSalesCreateOrConnectWithoutCarInput)
    connectOrCreate?: Array<TransactionSalesCreateOrConnectWithoutCarInput>;

    @Field(() => TransactionSalesCreateManyCarInputEnvelope, {nullable:true})
    @Type(() => TransactionSalesCreateManyCarInputEnvelope)
    createMany?: TransactionSalesCreateManyCarInputEnvelope;

    @Field(() => [TransactionSalesWhereUniqueInput], {nullable:true})
    @Type(() => TransactionSalesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>>;
}
