import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateWithoutUserInput } from './transaction-sales-create-without-user.input';
import { Type } from 'class-transformer';
import { TransactionSalesCreateOrConnectWithoutUserInput } from './transaction-sales-create-or-connect-without-user.input';
import { TransactionSalesCreateManyUserInputEnvelope } from './transaction-sales-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { TransactionSalesWhereUniqueInput } from './transaction-sales-where-unique.input';

@InputType()
export class TransactionSalesUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [TransactionSalesCreateWithoutUserInput], {nullable:true})
    @Type(() => TransactionSalesCreateWithoutUserInput)
    create?: Array<TransactionSalesCreateWithoutUserInput>;

    @Field(() => [TransactionSalesCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => TransactionSalesCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<TransactionSalesCreateOrConnectWithoutUserInput>;

    @Field(() => TransactionSalesCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => TransactionSalesCreateManyUserInputEnvelope)
    createMany?: TransactionSalesCreateManyUserInputEnvelope;

    @Field(() => [TransactionSalesWhereUniqueInput], {nullable:true})
    @Type(() => TransactionSalesWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TransactionSalesWhereUniqueInput, 'id'>>;
}
