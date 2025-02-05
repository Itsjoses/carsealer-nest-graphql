import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { CarUpdateManyWithoutCarTypeNestedInput } from '../car/car-update-many-without-car-type-nested.input';

@InputType()
export class CarTypeUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    name?: StringFieldUpdateOperationsInput;

    @Field(() => CarUpdateManyWithoutCarTypeNestedInput, {nullable:true})
    car?: CarUpdateManyWithoutCarTypeNestedInput;
}
