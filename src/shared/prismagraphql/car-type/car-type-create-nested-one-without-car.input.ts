import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeCreateWithoutCarInput } from './car-type-create-without-car.input';
import { Type } from 'class-transformer';
import { CarTypeCreateOrConnectWithoutCarInput } from './car-type-create-or-connect-without-car.input';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';

@InputType()
export class CarTypeCreateNestedOneWithoutCarInput {

    @Field(() => CarTypeCreateWithoutCarInput, {nullable:true})
    @Type(() => CarTypeCreateWithoutCarInput)
    create?: CarTypeCreateWithoutCarInput;

    @Field(() => CarTypeCreateOrConnectWithoutCarInput, {nullable:true})
    @Type(() => CarTypeCreateOrConnectWithoutCarInput)
    connectOrCreate?: CarTypeCreateOrConnectWithoutCarInput;

    @Field(() => CarTypeWhereUniqueInput, {nullable:true})
    @Type(() => CarTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CarTypeWhereUniqueInput, 'id'>;
}
