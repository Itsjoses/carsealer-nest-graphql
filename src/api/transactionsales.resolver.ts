import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { TransactionsalesService } from '../modules/transactionsales/transactionsales.service';
import {
    TransactionSales,
    TransactionSalesCreateInput,
    TransactionSalesUpdateInput,
} from 'src/shared/prismagraphql/transaction-sales';

@Resolver('Transactionsale')
export class TransactionsalesResolver {
    constructor(private readonly transactionsalesService: TransactionsalesService) {}

    @Mutation(() => TransactionSales)
    async createTransactionsale(
        @Args('transactionSalesCreateInput') transactionSalesCreateInput: TransactionSalesCreateInput
    ) {
        return await this.transactionsalesService.create(transactionSalesCreateInput);
    }

    @Query(() => [TransactionSales])
    async findAllTransactionSales() {
        return await this.transactionsalesService.findAll();
    }

    @Query(() => TransactionSales)
    async findOneTransactionSales(@Args('id') id: number) {
        return await this.transactionsalesService.findOne(id);
    }

    @Mutation(() => TransactionSales)
    async updateTransactionSales(
        @Args('transactionSalesUpdateInput') transactionSalesUpdateInput: TransactionSalesUpdateInput,
        @Args('id') id: number
    ) {
        return await this.transactionsalesService.update(id, transactionSalesUpdateInput);
    }

    @Mutation(() => TransactionSales)
    async removeTransactionSales(@Args('id') id: number) {
        return await this.transactionsalesService.remove(id);
    }
}
