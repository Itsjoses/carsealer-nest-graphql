import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueCarTypeOrThrowArgs {

    @Field(() => CarTypeWhereUniqueInput, {nullable:false})
    @Type(() => CarTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CarTypeWhereUniqueInput, 'id'>;
}
