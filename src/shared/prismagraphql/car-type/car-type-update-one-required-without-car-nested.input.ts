import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeCreateWithoutCarInput } from './car-type-create-without-car.input';
import { Type } from 'class-transformer';
import { CarTypeCreateOrConnectWithoutCarInput } from './car-type-create-or-connect-without-car.input';
import { CarTypeUpsertWithoutCarInput } from './car-type-upsert-without-car.input';
import { Prisma } from '@prisma/client';
import { CarTypeWhereUniqueInput } from './car-type-where-unique.input';
import { CarTypeUpdateToOneWithWhereWithoutCarInput } from './car-type-update-to-one-with-where-without-car.input';

@InputType()
export class CarTypeUpdateOneRequiredWithoutCarNestedInput {

    @Field(() => CarTypeCreateWithoutCarInput, {nullable:true})
    @Type(() => CarTypeCreateWithoutCarInput)
    create?: CarTypeCreateWithoutCarInput;

    @Field(() => CarTypeCreateOrConnectWithoutCarInput, {nullable:true})
    @Type(() => CarTypeCreateOrConnectWithoutCarInput)
    connectOrCreate?: CarTypeCreateOrConnectWithoutCarInput;

    @Field(() => CarTypeUpsertWithoutCarInput, {nullable:true})
    @Type(() => CarTypeUpsertWithoutCarInput)
    upsert?: CarTypeUpsertWithoutCarInput;

    @Field(() => CarTypeWhereUniqueInput, {nullable:true})
    @Type(() => CarTypeWhereUniqueInput)
    connect?: Prisma.AtLeast<CarTypeWhereUniqueInput, 'id'>;

    @Field(() => CarTypeUpdateToOneWithWhereWithoutCarInput, {nullable:true})
    @Type(() => CarTypeUpdateToOneWithWhereWithoutCarInput)
    update?: CarTypeUpdateToOneWithWhereWithoutCarInput;
}
