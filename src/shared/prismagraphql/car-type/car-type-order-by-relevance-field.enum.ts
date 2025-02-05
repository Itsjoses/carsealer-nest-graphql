import { registerEnumType } from '@nestjs/graphql';

export enum CarTypeOrderByRelevanceFieldEnum {
    name = "name"
}


registerEnumType(CarTypeOrderByRelevanceFieldEnum, { name: 'CarTypeOrderByRelevanceFieldEnum', description: undefined })
