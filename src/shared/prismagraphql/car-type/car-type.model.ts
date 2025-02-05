import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Car } from '../car/car.model';
import { CarTypeCount } from './car-type-count.output';

@ObjectType()
export class CarType {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => [Car], {nullable:true})
    car?: Array<Car>;

    @Field(() => CarTypeCount, {nullable:false})
    _count?: CarTypeCount;
}
