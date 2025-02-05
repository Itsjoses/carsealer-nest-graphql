import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CarCountAggregate } from './car-count-aggregate.output';
import { CarAvgAggregate } from './car-avg-aggregate.output';
import { CarSumAggregate } from './car-sum-aggregate.output';
import { CarMinAggregate } from './car-min-aggregate.output';
import { CarMaxAggregate } from './car-max-aggregate.output';

@ObjectType()
export class CarGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    carTypeId!: number;

    @Field(() => CarCountAggregate, {nullable:true})
    _count?: CarCountAggregate;

    @Field(() => CarAvgAggregate, {nullable:true})
    _avg?: CarAvgAggregate;

    @Field(() => CarSumAggregate, {nullable:true})
    _sum?: CarSumAggregate;

    @Field(() => CarMinAggregate, {nullable:true})
    _min?: CarMinAggregate;

    @Field(() => CarMaxAggregate, {nullable:true})
    _max?: CarMaxAggregate;
}
