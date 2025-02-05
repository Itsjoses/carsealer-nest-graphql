import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CarTypeWhereInput } from './car-type-where.input';
import { Type } from 'class-transformer';
import { CarTypeOrderByWithRelationInput } from './car-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CarTypeCountAggregateInput } from './car-type-count-aggregate.input';
import { CarTypeAvgAggregateInput } from './car-type-avg-aggregate.input';
import { CarTypeSumAggregateInput } from './car-type-sum-aggregate.input';
import { CarTypeMinAggregateInput } from './car-type-min-aggregate.input';
import { CarTypeMaxAggregateInput } from './car-type-max-aggregate.input';

@ArgsType()
export class CarTypeAggregateArgs {

    @Field(() => CarTypeWhereInput, {nullable:true})
    @Type(() => CarTypeWhereInput)
    where?: CarTypeWhereInput;

    @Field(() => [CarTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<CarTypeOrderByWithRelationInput>;

    @Field(() => CarTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<CarTypeWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CarTypeCountAggregateInput, {nullable:true})
    _count?: CarTypeCountAggregateInput;

    @Field(() => CarTypeAvgAggregateInput, {nullable:true})
    _avg?: CarTypeAvgAggregateInput;

    @Field(() => CarTypeSumAggregateInput, {nullable:true})
    _sum?: CarTypeSumAggregateInput;

    @Field(() => CarTypeMinAggregateInput, {nullable:true})
    _min?: CarTypeMinAggregateInput;

    @Field(() => CarTypeMaxAggregateInput, {nullable:true})
    _max?: CarTypeMaxAggregateInput;
}
