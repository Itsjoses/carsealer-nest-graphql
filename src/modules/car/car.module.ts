import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from '../../api/car.resolver';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [CarResolver, CarService],
    exports: [CarService],
})
export class CarModule {}
