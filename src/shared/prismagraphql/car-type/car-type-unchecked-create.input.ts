import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CarUncheckedCreateNestedManyWithoutCarTypeInput } from '../car/car-unchecked-create-nested-many-without-car-type.input';

@InputType()
export class CarTypeUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CarUncheckedCreateNestedManyWithoutCarTypeInput, {nullable:true})
    car?: CarUncheckedCreateNestedManyWithoutCarTypeInput;
}
