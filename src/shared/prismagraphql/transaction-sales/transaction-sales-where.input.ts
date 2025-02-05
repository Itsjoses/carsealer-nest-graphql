import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { CarScalarRelationFilter } from '../car/car-scalar-relation-filter.input';

@InputType()
export class TransactionSalesWhereInput {

    @Field(() => [TransactionSalesWhereInput], {nullable:true})
    AND?: Array<TransactionSalesWhereInput>;

    @Field(() => [TransactionSalesWhereInput], {nullable:true})
    OR?: Array<TransactionSalesWhereInput>;

    @Field(() => [TransactionSalesWhereInput], {nullable:true})
    NOT?: Array<TransactionSalesWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    carId?: IntFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    User?: UserScalarRelationFilter;

    @Field(() => CarScalarRelationFilter, {nullable:true})
    Car?: CarScalarRelationFilter;
}
