import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CarTypeCreateInput } from './car-type-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCarTypeArgs {

    @Field(() => CarTypeCreateInput, {nullable:false})
    @Type(() => CarTypeCreateInput)
    data!: CarTypeCreateInput;
}
