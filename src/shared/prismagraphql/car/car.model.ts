import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CarType } from '../car-type/car-type.model';
import { TransactionSales } from '../transaction-sales/transaction-sales.model';
import { CarCount } from './car-count.output';

@ObjectType()
export class Car {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Int, {nullable:false})
    carTypeId!: number;

    @Field(() => CarType, {nullable:false})
    carType?: CarType;

    @Field(() => [TransactionSales], {nullable:true})
    transactionSales?: Array<TransactionSales>;

    @Field(() => CarCount, {nullable:false})
    _count?: CarCount;
}
