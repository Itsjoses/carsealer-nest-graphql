import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CarUncheckedUpdateManyWithoutCarTypeNestedInput } from '../car/car-unchecked-update-many-without-car-type-nested.input';

@InputType()
export class CarTypeUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CarUncheckedUpdateManyWithoutCarTypeNestedInput, {nullable:true})
    car?: CarUncheckedUpdateManyWithoutCarTypeNestedInput;
}
