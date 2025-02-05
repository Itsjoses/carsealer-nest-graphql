import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { TransactionSalesOrderByRelationAggregateInput } from '../transaction-sales/transaction-sales-order-by-relation-aggregate.input';
import { UserOrderByRelevanceInput } from './user-order-by-relevance.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => TransactionSalesOrderByRelationAggregateInput, {nullable:true})
    transactionSales?: TransactionSalesOrderByRelationAggregateInput;

    @Field(() => UserOrderByRelevanceInput, {nullable:true})
    _relevance?: UserOrderByRelevanceInput;
}
