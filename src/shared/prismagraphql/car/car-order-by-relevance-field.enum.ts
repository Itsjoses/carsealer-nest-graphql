import { registerEnumType } from '@nestjs/graphql';

export enum CarOrderByRelevanceFieldEnum {
    name = "name"
}


registerEnumType(CarOrderByRelevanceFieldEnum, { name: 'CarOrderByRelevanceFieldEnum', description: undefined })
