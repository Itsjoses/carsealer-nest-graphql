import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';

@InputType()
export class TransactionSalesScalarWhereInput {

    @Field(() => [TransactionSalesScalarWhereInput], {nullable:true})
    AND?: Array<TransactionSalesScalarWhereInput>;

    @Field(() => [TransactionSalesScalarWhereInput], {nullable:true})
    OR?: Array<TransactionSalesScalarWhereInput>;

    @Field(() => [TransactionSalesScalarWhereInput], {nullable:true})
    NOT?: Array<TransactionSalesScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    userId?: IntFilter;

    @Field(() => IntFilter, {nullable:true})
    carId?: IntFilter;
}
