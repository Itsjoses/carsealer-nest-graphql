import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CarTypeCreateWithoutCarInput {

    @Field(() => String, {nullable:false})
    name!: string;
}
