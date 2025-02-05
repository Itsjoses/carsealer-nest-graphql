import { registerEnumType } from '@nestjs/graphql';

export enum CarScalarFieldEnum {
    id = "id",
    name = "name",
    carTypeId = "carTypeId"
}


registerEnumType(CarScalarFieldEnum, { name: 'CarScalarFieldEnum', description: undefined })
