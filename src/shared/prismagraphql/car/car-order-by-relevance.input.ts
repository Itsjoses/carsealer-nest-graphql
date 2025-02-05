import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarOrderByRelevanceFieldEnum } from './car-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CarOrderByRelevanceInput {

    @Field(() => [CarOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${CarOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
