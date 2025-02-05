import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { CarListRelationFilter } from '../car/car-list-relation-filter.input';

@InputType()
export class CarTypeWhereInput {

    @Field(() => [CarTypeWhereInput], {nullable:true})
    AND?: Array<CarTypeWhereInput>;

    @Field(() => [CarTypeWhereInput], {nullable:true})
    OR?: Array<CarTypeWhereInput>;

    @Field(() => [CarTypeWhereInput], {nullable:true})
    NOT?: Array<CarTypeWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => CarListRelationFilter, {nullable:true})
    car?: CarListRelationFilter;
}
