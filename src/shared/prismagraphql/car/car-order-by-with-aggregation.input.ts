import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CarCountOrderByAggregateInput } from './car-count-order-by-aggregate.input';
import { CarAvgOrderByAggregateInput } from './car-avg-order-by-aggregate.input';
import { CarMaxOrderByAggregateInput } from './car-max-order-by-aggregate.input';
import { CarMinOrderByAggregateInput } from './car-min-order-by-aggregate.input';
import { CarSumOrderByAggregateInput } from './car-sum-order-by-aggregate.input';

@InputType()
export class CarOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    carTypeId?: `${SortOrder}`;

    @Field(() => CarCountOrderByAggregateInput, {nullable:true})
    _count?: CarCountOrderByAggregateInput;

    @Field(() => CarAvgOrderByAggregateInput, {nullable:true})
    _avg?: CarAvgOrderByAggregateInput;

    @Field(() => CarMaxOrderByAggregateInput, {nullable:true})
    _max?: CarMaxOrderByAggregateInput;

    @Field(() => CarMinOrderByAggregateInput, {nullable:true})
    _min?: CarMinOrderByAggregateInput;

    @Field(() => CarSumOrderByAggregateInput, {nullable:true})
    _sum?: CarSumOrderByAggregateInput;
}
