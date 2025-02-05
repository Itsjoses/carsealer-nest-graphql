import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { TransactionSalesCreateNestedManyWithoutUserInput } from '../transaction-sales/transaction-sales-create-nested-many-without-user.input';

@InputType()
export class UserCreateInput {

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => TransactionSalesCreateNestedManyWithoutUserInput, {nullable:true})
    transactionSales?: TransactionSalesCreateNestedManyWithoutUserInput;
}
