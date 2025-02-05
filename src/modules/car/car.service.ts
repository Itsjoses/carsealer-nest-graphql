import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CarCreateInput, CarUpdateInput } from 'src/shared/prismagraphql/car';

@Injectable()
export class CarService {
    constructor(private prisma: PrismaService) {}
    create(carCreateInput: CarCreateInput) {
        return this.prisma.car.create({ data: carCreateInput });
    }

    findAll() {
        return this.prisma.car.findMany();
    }

    findOne(id: number) {
        return this.prisma.car.findFirst({ where: { id: id } });
    }

    update(id: number, carUpdateInput: CarUpdateInput) {
        return this.prisma.car.update({ data: carUpdateInput, where: { id: id } });
    }

    remove(id: number) {
        return this.prisma.car.delete({ where: { id: id } });
    }
}
