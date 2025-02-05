import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeCreateNestedOneWithoutCarInput } from '../car-type/car-type-create-nested-one-without-car.input';

@InputType()
export class CarCreateWithoutTransactionSalesInput {

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => CarTypeCreateNestedOneWithoutCarInput, {nullable:false})
    carType!: CarTypeCreateNestedOneWithoutCarInput;
}
