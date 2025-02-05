import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesScalarWhereInput } from './transaction-sales-scalar-where.input';
import { Type } from 'class-transformer';
import { TransactionSalesUncheckedUpdateManyWithoutUserInput } from './transaction-sales-unchecked-update-many-without-user.input';

@InputType()
export class TransactionSalesUpdateManyWithWhereWithoutUserInput {

    @Field(() => TransactionSalesScalarWhereInput, {nullable:false})
    @Type(() => TransactionSalesScalarWhereInput)
    where!: TransactionSalesScalarWhereInput;

    @Field(() => TransactionSalesUncheckedUpdateManyWithoutUserInput, {nullable:false})
    @Type(() => TransactionSalesUncheckedUpdateManyWithoutUserInput)
    data!: TransactionSalesUncheckedUpdateManyWithoutUserInput;
}
