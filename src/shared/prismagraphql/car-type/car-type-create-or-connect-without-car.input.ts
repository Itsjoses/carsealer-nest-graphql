import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';
import { Type } from 'class-transformer';
import { CarTypeCreateWithoutCarInput } from './car-type-create-without-car.input';

@InputType()
export class CarTypeCreateOrConnectWithoutCarInput {

    @Field(() => CarTypeWhereUniqueInput, {nullable:false})
    @Type(() => CarTypeWhereUniqueInput)
    where!: Prisma.AtLeast<CarTypeWhereUniqueInput, 'id'>;

    @Field(() => CarTypeCreateWithoutCarInput, {nullable:false})
    @Type(() => CarTypeCreateWithoutCarInput)
    create!: CarTypeCreateWithoutCarInput;
}
