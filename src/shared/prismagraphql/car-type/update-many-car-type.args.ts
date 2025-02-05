import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CarTypeUpdateManyMutationInput } from './car-type-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CarTypeWhereInput } from './car-type-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCarTypeArgs {

    @Field(() => CarTypeUpdateManyMutationInput, {nullable:false})
    @Type(() => CarTypeUpdateManyMutationInput)
    data!: CarTypeUpdateManyMutationInput;

    @Field(() => CarTypeWhereInput, {nullable:true})
    @Type(() => CarTypeWhereInput)
    where?: CarTypeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
