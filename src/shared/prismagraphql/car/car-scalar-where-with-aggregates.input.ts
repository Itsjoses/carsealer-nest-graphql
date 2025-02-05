import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CarScalarWhereWithAggregatesInput {

    @Field(() => [CarScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CarScalarWhereWithAggregatesInput>;

    @Field(() => [CarScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CarScalarWhereWithAggregatesInput>;

    @Field(() => [CarScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CarScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    carTypeId?: IntWithAggregatesFilter;
}
