import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class CarScalarWhereInput {

    @Field(() => [CarScalarWhereInput], {nullable:true})
    AND?: Array<CarScalarWhereInput>;

    @Field(() => [CarScalarWhereInput], {nullable:true})
    OR?: Array<CarScalarWhereInput>;

    @Field(() => [CarScalarWhereInput], {nullable:true})
    NOT?: Array<CarScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    carTypeId?: IntFilter;
}
