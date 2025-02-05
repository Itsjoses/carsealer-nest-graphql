import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { TransactionSalesWhereInput } from './transaction-sales-where.input';
import { IntFilter } from '../prisma/int-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { CarScalarRelationFilter } from '../car/car-scalar-relation-filter.input';

@InputType()
export class TransactionSalesWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [TransactionSalesWhereInput], {nullable:true})
    AND?: Array<TransactionSalesWhereInput>;

    @Field(() => [TransactionSalesWhereInput], {nullable:true})
    OR?: Array<TransactionSalesWhereInput>;

    @Field(() => [TransactionSalesWhereInput], {nullable:true})
    NOT?: Array<TransactionSalesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    carId?: IntFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    User?: UserScalarRelationFilter;

    @Field(() => CarScalarRelationFilter, {nullable:true})
    Car?: CarScalarRelationFilter;
}
