import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CarTypeOrderByWithRelationInput } from '../car-type/car-type-order-by-with-relation.input';
import { TransactionSalesOrderByRelationAggregateInput } from '../transaction-sales/transaction-sales-order-by-relation-aggregate.input';
import { CarOrderByRelevanceInput } from './car-order-by-relevance.input';

@InputType()
export class CarOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    name?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    carTypeId?: `${SortOrder}`;

    @Field(() => CarTypeOrderByWithRelationInput, {nullable:true})
    carType?: CarTypeOrderByWithRelationInput;

    @Field(() => TransactionSalesOrderByRelationAggregateInput, {nullable:true})
    transactionSales?: TransactionSalesOrderByRelationAggregateInput;

    @Field(() => CarOrderByRelevanceInput, {nullable:true})
    _relevance?: CarOrderByRelevanceInput;
}
