import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeWhereInput } from './car-type-where.input';
import { Type } from 'class-transformer';
import { CarTypeUpdateWithoutCarInput } from './car-type-update-without-car.input';

@InputType()
export class CarTypeUpdateToOneWithWhereWithoutCarInput {

    @Field(() => CarTypeWhereInput, {nullable:true})
    @Type(() => CarTypeWhereInput)
    where?: CarTypeWhereInput;

    @Field(() => CarTypeUpdateWithoutCarInput, {nullable:false})
    @Type(() => CarTypeUpdateWithoutCarInput)
    data!: CarTypeUpdateWithoutCarInput;
}
