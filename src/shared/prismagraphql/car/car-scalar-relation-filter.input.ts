import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarWhereInput } from './car-where.input';

@InputType()
export class CarScalarRelationFilter {

    @Field(() => CarWhereInput, {nullable:true})
    is?: CarWhereInput;

    @Field(() => CarWhereInput, {nullable:true})
    isNot?: CarWhereInput;
}
