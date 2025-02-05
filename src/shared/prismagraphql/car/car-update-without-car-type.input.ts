import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TransactionSalesUpdateManyWithoutCarNestedInput } from '../transaction-sales/transaction-sales-update-many-without-car-nested.input';

@InputType()
export class CarUpdateWithoutCarTypeInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => TransactionSalesUpdateManyWithoutCarNestedInput, {nullable:true})
    transactionSales?: TransactionSalesUpdateManyWithoutCarNestedInput;
}
