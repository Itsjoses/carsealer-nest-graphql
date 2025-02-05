import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionSalesCountAggregate } from './transaction-sales-count-aggregate.output';
import { TransactionSalesAvgAggregate } from './transaction-sales-avg-aggregate.output';
import { TransactionSalesSumAggregate } from './transaction-sales-sum-aggregate.output';
import { TransactionSalesMinAggregate } from './transaction-sales-min-aggregate.output';
import { TransactionSalesMaxAggregate } from './transaction-sales-max-aggregate.output';

@ObjectType()
export class TransactionSalesGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    userId!: number;

    @Field(() => Int, {nullable:false})
    carId!: number;

    @Field(() => TransactionSalesCountAggregate, {nullable:true})
    _count?: TransactionSalesCountAggregate;

    @Field(() => TransactionSalesAvgAggregate, {nullable:true})
    _avg?: TransactionSalesAvgAggregate;

    @Field(() => TransactionSalesSumAggregate, {nullable:true})
    _sum?: TransactionSalesSumAggregate;

    @Field(() => TransactionSalesMinAggregate, {nullable:true})
    _min?: TransactionSalesMinAggregate;

    @Field(() => TransactionSalesMaxAggregate, {nullable:true})
    _max?: TransactionSalesMaxAggregate;
}
