import { Injectable } from '@nestjs/common';
import { TransactionSalesCreateInput, TransactionSalesUpdateInput } from 'src/shared/prismagraphql/transaction-sales';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class TransactionsalesService {
    constructor(private prisma: PrismaService) {}
    create(transactionSalesCreateInput: TransactionSalesCreateInput) {
        return this.prisma.transactionSales.create({ data: transactionSalesCreateInput });
    }

    findAll() {
        return this.prisma.transactionSales.findMany();
    }

    findOne(id: number) {
        return this.prisma.transactionSales.findFirst({ where: { id: id } });
    }

    update(id: number, transactionSalesUpdateInput: TransactionSalesUpdateInput) {
        return this.prisma.transactionSales.update({ data: transactionSalesUpdateInput, where: { id: id } });
    }

    remove(id: number) {
        return this.prisma.transactionSales.delete({ where: { id: id } });
    }
}
