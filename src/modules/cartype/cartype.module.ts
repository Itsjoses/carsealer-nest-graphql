import { Module } from '@nestjs/common';
import { CartypeService } from './cartype.service';
import { CartypeResolver } from '../../api/cartype.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [CartypeResolver, CartypeService],
    exports: [CartypeService],
})
export class CartypeModule {}
