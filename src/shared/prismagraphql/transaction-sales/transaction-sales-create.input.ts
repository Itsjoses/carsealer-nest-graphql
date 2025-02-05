import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutTransactionSalesInput } from '../user/user-create-nested-one-without-transaction-sales.input';
import { CarCreateNestedOneWithoutTransactionSalesInput } from '../car/car-create-nested-one-without-transaction-sales.input';

@InputType()
export class TransactionSalesCreateInput {

    @Field(() => UserCreateNestedOneWithoutTransactionSalesInput, {nullable:false})
    User!: UserCreateNestedOneWithoutTransactionSalesInput;

    @Field(() => CarCreateNestedOneWithoutTransactionSalesInput, {nullable:false})
    Car!: CarCreateNestedOneWithoutTransactionSalesInput;
}
