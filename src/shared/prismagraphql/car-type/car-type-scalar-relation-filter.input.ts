import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeWhereInput } from './car-type-where.input';

@InputType()
export class CarTypeScalarRelationFilter {

    @Field(() => CarTypeWhereInput, {nullable:true})
    is?: CarTypeWhereInput;

    @Field(() => CarTypeWhereInput, {nullable:true})
    isNot?: CarTypeWhereInput;
}
