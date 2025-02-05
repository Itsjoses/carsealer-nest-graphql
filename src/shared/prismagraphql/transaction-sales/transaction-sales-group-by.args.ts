import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { TransactionSalesWhereInput } from './transaction-sales-where.input';
import { Type } from 'class-transformer';
import { TransactionSalesOrderByWithAggregationInput } from './transaction-sales-order-by-with-aggregation.input';
import { TransactionSalesScalarFieldEnum } from './transaction-sales-scalar-field.enum';
import { TransactionSalesScalarWhereWithAggregatesInput } from './transaction-sales-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { TransactionSalesCountAggregateInput } from './transaction-sales-count-aggregate.input';
import { TransactionSalesAvgAggregateInput } from './transaction-sales-avg-aggregate.input';
import { TransactionSalesSumAggregateInput } from './transaction-sales-sum-aggregate.input';
import { TransactionSalesMinAggregateInput } from './transaction-sales-min-aggregate.input';
import { TransactionSalesMaxAggregateInput } from './transaction-sales-max-aggregate.input';

@ArgsType()
export class TransactionSalesGroupByArgs {

    @Field(() => TransactionSalesWhereInput, {nullable:true})
    @Type(() => TransactionSalesWhereInput)
    where?: TransactionSalesWhereInput;

    @Field(() => [TransactionSalesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TransactionSalesOrderByWithAggregationInput>;

    @Field(() => [TransactionSalesScalarFieldEnum], {nullable:false})
    by!: Array<`${TransactionSalesScalarFieldEnum}`>;

    @Field(() => TransactionSalesScalarWhereWithAggregatesInput, {nullable:true})
    having?: TransactionSalesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => TransactionSalesCountAggregateInput, {nullable:true})
    _count?: TransactionSalesCountAggregateInput;

    @Field(() => TransactionSalesAvgAggregateInput, {nullable:true})
    _avg?: TransactionSalesAvgAggregateInput;

    @Field(() => TransactionSalesSumAggregateInput, {nullable:true})
    _sum?: TransactionSalesSumAggregateInput;

    @Field(() => TransactionSalesMinAggregateInput, {nullable:true})
    _min?: TransactionSalesMinAggregateInput;

    @Field(() => TransactionSalesMaxAggregateInput, {nullable:true})
    _max?: TransactionSalesMaxAggregateInput;
}
