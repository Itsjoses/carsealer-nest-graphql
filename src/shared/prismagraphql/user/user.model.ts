import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { TransactionSales } from '../transaction-sales/transaction-sales.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => [TransactionSales], {nullable:true})
    transactionSales?: Array<TransactionSales>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
