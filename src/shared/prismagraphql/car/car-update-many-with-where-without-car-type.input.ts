import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarScalarWhereInput } from './car-scalar-where.input';
import { Type } from 'class-transformer';
import { CarUpdateManyMutationInput } from './car-update-many-mutation.input';

@InputType()
export class CarUpdateManyWithWhereWithoutCarTypeInput {

    @Field(() => CarScalarWhereInput, {nullable:false})
    @Type(() => CarScalarWhereInput)
    where!: CarScalarWhereInput;

    @Field(() => CarUpdateManyMutationInput, {nullable:false})
    @Type(() => CarUpdateManyMutationInput)
    data!: CarUpdateManyMutationInput;
}
