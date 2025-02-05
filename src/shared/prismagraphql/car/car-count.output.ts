import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class CarCount {

    @Field(() => Int, {nullable:false})
    transactionSales?: number;
}
