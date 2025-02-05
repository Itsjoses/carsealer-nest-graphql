import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CarTypeWhereInput } from './car-type-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CarListRelationFilter } from '../car/car-list-relation-filter.input';

@InputType()
export class CarTypeWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CarTypeWhereInput], {nullable:true})
    AND?: Array<CarTypeWhereInput>;

    @Field(() => [CarTypeWhereInput], {nullable:true})
    OR?: Array<CarTypeWhereInput>;

    @Field(() => [CarTypeWhereInput], {nullable:true})
    NOT?: Array<CarTypeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CarListRelationFilter, {nullable:true})
    car?: CarListRelationFilter;
}
