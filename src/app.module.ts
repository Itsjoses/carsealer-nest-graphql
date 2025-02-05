import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PrismaModule } from './database/prisma.module';
import { UserModule } from './modules/user/user.module';
import { CartypeResolver } from './api/cartype.resolver';
import { CartypeModule } from './modules/cartype/cartype.module';
import { CarModule } from './modules/car/car.module';
import { CarResolver } from './api/car.resolver';
import { TransactionsalesModule } from './modules/transactionsales/transactionsales.module';
import { UserResolver } from './api/user.resolver';

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            playground: true,
        }),
        PrismaModule,
        UserModule,
        CartypeModule,
        CarModule,
        TransactionsalesModule,
    ],
    controllers: [],
    providers: [UserResolver, CartypeResolver, CarResolver],
})
export class AppModule {}
