import { Injectable } from '@nestjs/common';
import { CarTypeCreateInput, CarTypeUpdateInput } from 'src/shared/prismagraphql/car-type';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CartypeService {
    constructor(private prisma: PrismaService) {}
    create(carTypeCreateInput: CarTypeCreateInput) {
        return this.prisma.carType.create({ data: carTypeCreateInput });
    }

    findAll() {
        return this.prisma.carType.findMany();
    }

    findOne(id: number) {
        return this.prisma.carType.findFirst({ where: { id: id } });
    }

    update(id: number, updateCartypeInput: CarTypeUpdateInput) {
        return this.prisma.carType.update({ data: updateCartypeInput, where: { id: id } });
    }

    remove(id: number) {
        return this.prisma.carType.delete({ where: { id: id } });
    }
}
