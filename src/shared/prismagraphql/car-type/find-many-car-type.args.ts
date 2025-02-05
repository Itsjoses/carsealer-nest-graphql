import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CarTypeWhereInput } from './car-type-where.input';
import { Type } from 'class-transformer';
import { CarTypeOrderByWithRelationInput } from './car-type-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CarTypeScalarFieldEnum } from './car-type-scalar-field.enum';

@ArgsType()
export class FindManyCarTypeArgs {

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

    @Field(() => [CarTypeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${CarTypeScalarFieldEnum}`>;
}
