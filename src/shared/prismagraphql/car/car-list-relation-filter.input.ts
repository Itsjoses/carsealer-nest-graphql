import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarWhereInput } from './car-where.input';

@InputType()
export class CarListRelationFilter {

    @Field(() => CarWhereInput, {nullable:true})
    every?: CarWhereInput;

    @Field(() => CarWhereInput, {nullable:true})
    some?: CarWhereInput;

    @Field(() => CarWhereInput, {nullable:true})
    none?: CarWhereInput;
}
