import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CarTypeOrderByRelevanceFieldEnum } from './car-type-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class CarTypeOrderByRelevanceInput {

    @Field(() => [CarTypeOrderByRelevanceFieldEnum], {nullable:false})
    fields!: Array<`${CarTypeOrderByRelevanceFieldEnum}`>;

    @Field(() => SortOrder, {nullable:false})
    sort!: `${SortOrder}`;

    @Field(() => String, {nullable:false})
    search!: string;
}
