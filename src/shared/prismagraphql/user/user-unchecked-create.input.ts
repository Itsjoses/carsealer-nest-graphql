import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionSalesUncheckedCreateNestedManyWithoutUserInput } from '../transaction-sales/transaction-sales-unchecked-create-nested-many-without-user.input';

@InputType()
export class UserUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => TransactionSalesUncheckedCreateNestedManyWithoutUserInput, {nullable:true})
    transactionSales?: TransactionSalesUncheckedCreateNestedManyWithoutUserInput;
}
