import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { CarOrderByWithRelationInput } from '../car/car-order-by-with-relation.input';

@InputType()
export class TransactionSalesOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    carId?: `${SortOrder}`;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    User?: UserOrderByWithRelationInput;

    @Field(() => CarOrderByWithRelationInput, {nullable:true})
    Car?: CarOrderByWithRelationInput;
}
