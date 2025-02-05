import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateWithoutUserInput } from './transaction-sales-create-without-user.input';
import { Type } from 'class-transformer';
import { TransactionSalesCreateOrConnectWithoutUserInput } from './transaction-sales-create-or-connect-without-user.input';
import { TransactionSalesUpsertWithWhereUniqueWithoutUserInput } from './transaction-sales-upsert-with-where-unique-without-user.input';
import { TransactionSalesCreateManyUserInputEnvelope } from './transaction-sales-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';
import { TransactionSalesUpdateWithWhereUniqueWithoutUserInput } from './transaction-sales-update-with-where-unique-without-user.input';
import { TransactionSalesUpdateManyWithWhereWithoutUserInput } from './transaction-sales-update-many-with-where-without-user.input';
import { TransactionSalesScalarWhereInput } from './transaction-sales-scalar-where.input';

@InputType()
export class TransactionSalesUncheckedUpdateManyWithoutUserNestedInput {

    @Field(() => [TransactionSalesCreateWithoutUserInput], {nullable:true})
    @Type(() => TransactionSalesCreateWithoutUserInput)
    create?: Array<TransactionSalesCreateWithoutUserInput>;

    @Field(() => [TransactionSalesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TransactionSalesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TransactionSalesCreateOrConnectWithoutUserInput>;

    @Field(() => [TransactionSalesUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TransactionSalesUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<TransactionSalesUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => TransactionSalesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TransactionSalesCreateManyUserInputEnvelope)
    createMany?: TransactionSalesCreateManyUserInputEnvelope;

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

    @Field(() => [TransactionSalesUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => TransactionSalesUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<TransactionSalesUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [TransactionSalesUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => TransactionSalesUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<TransactionSalesUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [TransactionSalesScalarWhereInput], {nullable:true})
    @Type(() => TransactionSalesScalarWhereInput)
    deleteMany?: Array<TransactionSalesScalarWhereInput>;
}
