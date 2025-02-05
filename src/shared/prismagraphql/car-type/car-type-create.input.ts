import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarCreateNestedManyWithoutCarTypeInput } from '../car/car-create-nested-many-without-car-type.input';

@InputType()
export class CarTypeCreateInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CarCreateNestedManyWithoutCarTypeInput, {nullable:true})
    car?: CarCreateNestedManyWithoutCarTypeInput;
}
