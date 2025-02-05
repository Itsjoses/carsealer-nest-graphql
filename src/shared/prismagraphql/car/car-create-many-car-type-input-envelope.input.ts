import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarCreateManyCarTypeInput } from './car-create-many-car-type.input';
import { Type } from 'class-transformer';

@InputType()
export class CarCreateManyCarTypeInputEnvelope {

    @Field(() => [CarCreateManyCarTypeInput], {nullable:false})
    @Type(() => CarCreateManyCarTypeInput)
    data!: Array<CarCreateManyCarTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
