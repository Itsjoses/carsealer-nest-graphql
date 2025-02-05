import { registerEnumType } from '@nestjs/graphql';

export enum CarTypeScalarFieldEnum {
    id = "id",
    name = "name"
}


registerEnumType(CarTypeScalarFieldEnum, { name: 'CarTypeScalarFieldEnum', description: undefined })
