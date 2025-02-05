import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeUpdateWithoutCarInput } from './car-type-update-without-car.input';
import { Type } from 'class-transformer';
import { CarTypeCreateWithoutCarInput } from './car-type-create-without-car.input';
import { CarTypeWhereInput } from './car-type-where.input';

@InputType()
export class CarTypeUpsertWithoutCarInput {

    @Field(() => CarTypeUpdateWithoutCarInput, {nullable:false})
    @Type(() => CarTypeUpdateWithoutCarInput)
    update!: CarTypeUpdateWithoutCarInput;

    @Field(() => CarTypeCreateWithoutCarInput, {nullable:false})
    @Type(() => CarTypeCreateWithoutCarInput)
    create!: CarTypeCreateWithoutCarInput;

    @Field(() => CarTypeWhereInput, {nullable:true})
    @Type(() => CarTypeWhereInput)
    where?: CarTypeWhereInput;
}
