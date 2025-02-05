import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CarTypeCountOrderByAggregateInput } from './car-type-count-order-by-aggregate.input';
import { CarTypeAvgOrderByAggregateInput } from './car-type-avg-order-by-aggregate.input';
import { CarTypeMaxOrderByAggregateInput } from './car-type-max-order-by-aggregate.input';
import { CarTypeMinOrderByAggregateInput } from './car-type-min-order-by-aggregate.input';
import { CarTypeSumOrderByAggregateInput } from './car-type-sum-order-by-aggregate.input';

@InputType()
export class CarTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => CarTypeCountOrderByAggregateInput, {nullable:true})
    _count?: CarTypeCountOrderByAggregateInput;

    @Field(() => CarTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: CarTypeAvgOrderByAggregateInput;

    @Field(() => CarTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: CarTypeMaxOrderByAggregateInput;

    @Field(() => CarTypeMinOrderByAggregateInput, {nullable:true})
    _min?: CarTypeMinOrderByAggregateInput;

    @Field(() => CarTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: CarTypeSumOrderByAggregateInput;
}
