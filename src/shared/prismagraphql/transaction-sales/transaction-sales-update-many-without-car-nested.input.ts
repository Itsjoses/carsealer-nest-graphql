import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateWithoutCarInput } from './transaction-sales-create-without-car.input';
import { Type } from 'class-transformer';
import { TransactionSalesCreateOrConnectWithoutCarInput } from './transaction-sales-create-or-connect-without-car.input';
import { TransactionSalesUpsertWithWhereUniqueWithoutCarInput } from './transaction-sales-upsert-with-where-unique-without-car.input';
import { TransactionSalesCreateManyCarInputEnvelope } from './transaction-sales-create-many-car-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';
import { TransactionSalesUpdateWithWhereUniqueWithoutCarInput } from './transaction-sales-update-with-where-unique-without-car.input';
import { TransactionSalesUpdateManyWithWhereWithoutCarInput } from './transaction-sales-update-many-with-where-without-car.input';
import { TransactionSalesScalarWhereInput } from './transaction-sales-scalar-where.input';

@InputType()
export class TransactionSalesUpdateManyWithoutCarNestedInput {

    @Field(() => [TransactionSalesCreateWithoutCarInput], {nullable:true})
    @Type(() => TransactionSalesCreateWithoutCarInput)
    create?: Array<TransactionSalesCreateWithoutCarInput>;

    @Field(() => [TransactionSalesCreateOrConnectWithoutCarInput], {nullable:true})
    @Type(() => TransactionSalesCreateOrConnectWithoutCarInput)
    connectOrCreate?: Array<TransactionSalesCreateOrConnectWithoutCarInput>;

    @Field(() => [TransactionSalesUpsertWithWhereUniqueWithoutCarInput], {nullable:true})
    @Type(() => TransactionSalesUpsertWithWhereUniqueWithoutCarInput)
    upsert?: Array<TransactionSalesUpsertWithWhereUniqueWithoutCarInput>;

    @Field(() => TransactionSalesCreateManyCarInputEnvelope, {nullable:true})
    @Type(() => TransactionSalesCreateManyCarInputEnvelope)
    createMany?: TransactionSalesCreateManyCarInputEnvelope;

    @Field(() => [TransactionSalesWhereUniqueInput], {nullable:true})
    @Type(() => TransactionSalesWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionSalesWhereUniqueInput], {nullable:true})
    @Type(() => TransactionSalesWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionSalesWhereUniqueInput], {nullable:true})
    @Type(() => TransactionSalesWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionSalesWhereUniqueInput], {nullable:true})
    @Type(() => TransactionSalesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>>;

    @Field(() => [TransactionSalesUpdateWithWhereUniqueWithoutCarInput], {nullable:true})
    @Type(() => TransactionSalesUpdateWithWhereUniqueWithoutCarInput)
    update?: Array<TransactionSalesUpdateWithWhereUniqueWithoutCarInput>;

    @Field(() => [TransactionSalesUpdateManyWithWhereWithoutCarInput], {nullable:true})
    @Type(() => TransactionSalesUpdateManyWithWhereWithoutCarInput)
    updateMany?: Array<TransactionSalesUpdateManyWithWhereWithoutCarInput>;

    @Field(() => [TransactionSalesScalarWhereInput], {nullable:true})
    @Type(() => TransactionSalesScalarWhereInput)
    deleteMany?: Array<TransactionSalesScalarWhereInput>;
}
