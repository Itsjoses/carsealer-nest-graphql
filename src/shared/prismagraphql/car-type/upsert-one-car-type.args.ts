import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';
import { Type } from 'class-transformer';
import { CarTypeCreateInput } from './car-type-create.input';
import { CarTypeUpdateInput } from './car-type-update.input';

@ArgsType()
export class UpsertOneCarTypeArgs {

    @Field(() => CarTypeWhereUniqueInput, {nullable:false})
    @Type(() => CarTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CarTypeWhereUniqueInput, 'id'>;

    @Field(() => CarTypeCreateInput, {nullable:false})
    @Type(() => CarTypeCreateInput)
    create!: CarTypeCreateInput;

    @Field(() => CarTypeUpdateInput, {nullable:false})
    @Type(() => CarTypeUpdateInput)
    update!: CarTypeUpdateInput;
}
