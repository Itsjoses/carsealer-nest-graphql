import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarCreateWithoutCarTypeInput } from './car-create-without-car-type.input';
import { Type } from 'class-transformer';
import { CarCreateOrConnectWithoutCarTypeInput } from './car-create-or-connect-without-car-type.input';
import { CarCreateManyCarTypeInputEnvelope } from './car-create-many-car-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CarWhereUniqueInput } from './car-where-unique.input';

@InputType()
export class CarUncheckedCreateNestedManyWithoutCarTypeInput {

    @Field(() => [CarCreateWithoutCarTypeInput], {nullable:true})
    @Type(() => CarCreateWithoutCarTypeInput)
    create?: Array<CarCreateWithoutCarTypeInput>;

    @Field(() => [CarCreateOrConnectWithoutCarTypeInput], {nullable:true})
    @Type(() => CarCreateOrConnectWithoutCarTypeInput)
    connectOrCreate?: Array<CarCreateOrConnectWithoutCarTypeInput>;

    @Field(() => CarCreateManyCarTypeInputEnvelope, {nullable:true})
    @Type(() => CarCreateManyCarTypeInputEnvelope)
    createMany?: CarCreateManyCarTypeInputEnvelope;

    @Field(() => [CarWhereUniqueInput], {nullable:true})
    @Type(() => CarWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CarWhereUniqueInput, 'id'>>;
}
