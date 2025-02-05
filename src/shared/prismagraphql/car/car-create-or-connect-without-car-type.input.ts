import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CarWhereUniqueInput } from './car-where-unique.input';
import { Type } from 'class-transformer';
import { CarCreateWithoutCarTypeInput } from './car-create-without-car-type.input';

@InputType()
export class CarCreateOrConnectWithoutCarTypeInput {

    @Field(() => CarWhereUniqueInput, {nullable:false})
    @Type(() => CarWhereUniqueInput)
    where!: Prisma.AtLeast<CarWhereUniqueInput, 'id'>;

    @Field(() => CarCreateWithoutCarTypeInput, {nullable:false})
    @Type(() => CarCreateWithoutCarTypeInput)
    create!: CarCreateWithoutCarTypeInput;
}
