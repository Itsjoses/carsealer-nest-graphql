import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CarWhereInput } from './car-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntFilter } from '../prisma/int-filter.input';
import { CarTypeScalarRelationFilter } from '../car-type/car-type-scalar-relation-filter.input';
import { TransactionSalesListRelationFilter } from '../transaction-sales/transaction-sales-list-relation-filter.input';

@InputType()
export class CarWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [CarWhereInput], {nullable:true})
    AND?: Array<CarWhereInput>;

    @Field(() => [CarWhereInput], {nullable:true})
    OR?: Array<CarWhereInput>;

    @Field(() => [CarWhereInput], {nullable:true})
    NOT?: Array<CarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    carTypeId?: IntFilter;

    @Field(() => CarTypeScalarRelationFilter, {nullable:true})
    carType?: CarTypeScalarRelationFilter;

    @Field(() => TransactionSalesListRelationFilter, {nullable:true})
    transactionSales?: TransactionSalesListRelationFilter;
}
