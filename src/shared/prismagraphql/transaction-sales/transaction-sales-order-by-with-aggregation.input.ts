import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionSalesCountOrderByAggregateInput } from './transaction-sales-count-order-by-aggregate.input';
import { TransactionSalesAvgOrderByAggregateInput } from './transaction-sales-avg-order-by-aggregate.input';
import { TransactionSalesMaxOrderByAggregateInput } from './transaction-sales-max-order-by-aggregate.input';
import { TransactionSalesMinOrderByAggregateInput } from './transaction-sales-min-order-by-aggregate.input';
import { TransactionSalesSumOrderByAggregateInput } from './transaction-sales-sum-order-by-aggregate.input';

@InputType()
export class TransactionSalesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    carId?: `${SortOrder}`;

    @Field(() => TransactionSalesCountOrderByAggregateInput, {nullable:true})
    _count?: TransactionSalesCountOrderByAggregateInput;

    @Field(() => TransactionSalesAvgOrderByAggregateInput, {nullable:true})
    _avg?: TransactionSalesAvgOrderByAggregateInput;

    @Field(() => TransactionSalesMaxOrderByAggregateInput, {nullable:true})
    _max?: TransactionSalesMaxOrderByAggregateInput;

    @Field(() => TransactionSalesMinOrderByAggregateInput, {nullable:true})
    _min?: TransactionSalesMinOrderByAggregateInput;

    @Field(() => TransactionSalesSumOrderByAggregateInput, {nullable:true})
    _sum?: TransactionSalesSumOrderByAggregateInput;
}
