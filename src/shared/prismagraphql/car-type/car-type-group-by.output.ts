import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CarTypeCountAggregate } from './car-type-count-aggregate.output';
import { CarTypeAvgAggregate } from './car-type-avg-aggregate.output';
import { CarTypeSumAggregate } from './car-type-sum-aggregate.output';
import { CarTypeMinAggregate } from './car-type-min-aggregate.output';
import { CarTypeMaxAggregate } from './car-type-max-aggregate.output';

@ObjectType()
export class CarTypeGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CarTypeCountAggregate, {nullable:true})
    _count?: CarTypeCountAggregate;

    @Field(() => CarTypeAvgAggregate, {nullable:true})
    _avg?: CarTypeAvgAggregate;

    @Field(() => CarTypeSumAggregate, {nullable:true})
    _sum?: CarTypeSumAggregate;

    @Field(() => CarTypeMinAggregate, {nullable:true})
    _min?: CarTypeMinAggregate;

    @Field(() => CarTypeMaxAggregate, {nullable:true})
    _max?: CarTypeMaxAggregate;
}
