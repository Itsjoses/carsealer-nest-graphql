import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class CarTypeScalarWhereWithAggregatesInput {

    @Field(() => [CarTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CarTypeScalarWhereWithAggregatesInput>;

    @Field(() => [CarTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CarTypeScalarWhereWithAggregatesInput>;

    @Field(() => [CarTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CarTypeScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
