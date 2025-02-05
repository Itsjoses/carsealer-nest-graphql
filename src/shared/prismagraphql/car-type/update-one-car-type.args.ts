import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CarTypeUpdateInput } from './car-type-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';

@ArgsType()
export class UpdateOneCarTypeArgs {

    @Field(() => CarTypeUpdateInput, {nullable:false})
    @Type(() => CarTypeUpdateInput)
    data!: CarTypeUpdateInput;

    @Field(() => CarTypeWhereUniqueInput, {nullable:false})
    @Type(() => CarTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CarTypeWhereUniqueInput, 'id'>;
}
