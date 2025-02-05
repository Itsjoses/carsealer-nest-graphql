import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CarWhereUniqueInput } from './car-where-unique.input';
import { Type } from 'class-transformer';
import { CarUpdateWithoutCarTypeInput } from './car-update-without-car-type.input';
import { CarCreateWithoutCarTypeInput } from './car-create-without-car-type.input';

@InputType()
export class CarUpsertWithWhereUniqueWithoutCarTypeInput {

    @Field(() => CarWhereUniqueInput, {nullable:false})
    @Type(() => CarWhereUniqueInput)
    where!: Prisma.AtLeast<CarWhereUniqueInput, 'id'>;

    @Field(() => CarUpdateWithoutCarTypeInput, {nullable:false})
    @Type(() => CarUpdateWithoutCarTypeInput)
    update!: CarUpdateWithoutCarTypeInput;

    @Field(() => CarCreateWithoutCarTypeInput, {nullable:false})
    @Type(() => CarCreateWithoutCarTypeInput)
    create!: CarCreateWithoutCarTypeInput;
}
