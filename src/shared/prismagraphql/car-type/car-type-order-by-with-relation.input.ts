import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CarOrderByRelationAggregateInput } from '../car/car-order-by-relation-aggregate.input';
import { CarTypeOrderByRelevanceInput } from './car-type-order-by-relevance.input';

@InputType()
export class CarTypeOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => CarOrderByRelationAggregateInput, {nullable:true})
    car?: CarOrderByRelationAggregateInput;

    @Field(() => CarTypeOrderByRelevanceInput, {nullable:true})
    _relevance?: CarTypeOrderByRelevanceInput;
}
