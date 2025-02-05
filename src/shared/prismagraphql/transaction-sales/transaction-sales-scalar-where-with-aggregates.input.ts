import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class TransactionSalesScalarWhereWithAggregatesInput {

    @Field(() => [TransactionSalesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TransactionSalesScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionSalesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TransactionSalesScalarWhereWithAggregatesInput>;

    @Field(() => [TransactionSalesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TransactionSalesScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    userId?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    carId?: IntWithAggregatesFilter;
}
