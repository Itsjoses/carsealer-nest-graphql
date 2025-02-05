import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CarTypeUpdateOneRequiredWithoutCarNestedInput } from '../car-type/car-type-update-one-required-without-car-nested.input';

@InputType()
export class CarUpdateWithoutTransactionSalesInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CarTypeUpdateOneRequiredWithoutCarNestedInput, {nullable:true})
    carType?: CarTypeUpdateOneRequiredWithoutCarNestedInput;
}
