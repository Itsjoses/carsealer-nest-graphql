import { registerEnumType } from '@nestjs/graphql';

export enum TransactionSalesScalarFieldEnum {
    id = "id",
    userId = "userId",
    carId = "carId"
}


registerEnumType(TransactionSalesScalarFieldEnum, { name: 'TransactionSalesScalarFieldEnum', description: undefined })
