import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { TransactionSalesUncheckedUpdateManyWithoutCarNestedInput } from '../transaction-sales/transaction-sales-unchecked-update-many-without-car-nested.input';

@InputType()
export class CarUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    carTypeId?: IntFieldUpdateOperationsInput;

    @Field(() => TransactionSalesUncheckedUpdateManyWithoutCarNestedInput, {nullable:true})
    transactionSales?: TransactionSalesUncheckedUpdateManyWithoutCarNestedInput;
}
