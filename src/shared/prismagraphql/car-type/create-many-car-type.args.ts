import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CarTypeCreateManyInput } from './car-type-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCarTypeArgs {

    @Field(() => [CarTypeCreateManyInput], {nullable:false})
    @Type(() => CarTypeCreateManyInput)
    data!: Array<CarTypeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
