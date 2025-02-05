import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { Car } from '../car/car.model';

@ObjectType()
export class TransactionSales {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    carId!: number;

    @Field(() => User, {nullable:false})
    User?: User;

    @Field(() => Car, {nullable:false})
    Car?: Car;
}
