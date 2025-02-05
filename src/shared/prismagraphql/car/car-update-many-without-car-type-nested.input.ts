import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarCreateWithoutCarTypeInput } from './car-create-without-car-type.input';
import { Type } from 'class-transformer';
import { CarCreateOrConnectWithoutCarTypeInput } from './car-create-or-connect-without-car-type.input';
import { CarUpsertWithWhereUniqueWithoutCarTypeInput } from './car-upsert-with-where-unique-without-car-type.input';
import { CarCreateManyCarTypeInputEnvelope } from './car-create-many-car-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { CarWhereUniqueInput } from './car-where-unique.input';
import { CarUpdateWithWhereUniqueWithoutCarTypeInput } from './car-update-with-where-unique-without-car-type.input';
import { CarUpdateManyWithWhereWithoutCarTypeInput } from './car-update-many-with-where-without-car-type.input';
import { CarScalarWhereInput } from './car-scalar-where.input';

@InputType()
export class CarUpdateManyWithoutCarTypeNestedInput {

    @Field(() => [CarCreateWithoutCarTypeInput], {nullable:true})
    @Type(() => CarCreateWithoutCarTypeInput)
    create?: Array<CarCreateWithoutCarTypeInput>;

    @Field(() => [CarCreateOrConnectWithoutCarTypeInput], {nullable:true})
    @Type(() => CarCreateOrConnectWithoutCarTypeInput)
    connectOrCreate?: Array<CarCreateOrConnectWithoutCarTypeInput>;

    @Field(() => [CarUpsertWithWhereUniqueWithoutCarTypeInput], {nullable:true})
    @Type(() => CarUpsertWithWhereUniqueWithoutCarTypeInput)
    upsert?: Array<CarUpsertWithWhereUniqueWithoutCarTypeInput>;

    @Field(() => CarCreateManyCarTypeInputEnvelope, {nullable:true})
    @Type(() => CarCreateManyCarTypeInputEnvelope)
    createMany?: CarCreateManyCarTypeInputEnvelope;

    @Field(() => [CarWhereUniqueInput], {nullable:true})
    @Type(() => CarWhereUniqueInput)
    set?: Array<Prisma.AtLeast<CarWhereUniqueInput, 'id'>>;

    @Field(() => [CarWhereUniqueInput], {nullable:true})
    @Type(() => CarWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<CarWhereUniqueInput, 'id'>>;

    @Field(() => [CarWhereUniqueInput], {nullable:true})
    @Type(() => CarWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<CarWhereUniqueInput, 'id'>>;

    @Field(() => [CarWhereUniqueInput], {nullable:true})
    @Type(() => CarWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<CarWhereUniqueInput, 'id'>>;

    @Field(() => [CarUpdateWithWhereUniqueWithoutCarTypeInput], {nullable:true})
    @Type(() => CarUpdateWithWhereUniqueWithoutCarTypeInput)
    update?: Array<CarUpdateWithWhereUniqueWithoutCarTypeInput>;

    @Field(() => [CarUpdateManyWithWhereWithoutCarTypeInput], {nullable:true})
    @Type(() => CarUpdateManyWithWhereWithoutCarTypeInput)
    updateMany?: Array<CarUpdateManyWithWhereWithoutCarTypeInput>;

    @Field(() => [CarScalarWhereInput], {nullable:true})
    @Type(() => CarScalarWhereInput)
    deleteMany?: Array<CarScalarWhereInput>;
}
