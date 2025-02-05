import { Module } from '@nestjs/common';
import { TransactionsalesService } from './transactionsales.service';
import { TransactionsalesResolver } from '../../api/transactionsales.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [TransactionsalesResolver, TransactionsalesService],
    exports: [TransactionsalesService],
})
export class TransactionsalesModule {}
