import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarService } from '../modules/car/car.service';
import { Car, CarCreateInput, CarUpdateInput } from 'src/shared/prismagraphql/car';

@Resolver('Car')
export class CarResolver {
    constructor(private readonly carService: CarService) {}

    @Mutation(() => Car)
    async createCar(@Args('carCreateInput') carCreateInput: CarCreateInput) {
        return await this.carService.create(carCreateInput);
    }

    @Query(() => [Car])
    async findAllCar() {
        return await this.carService.findAll();
    }

    @Query(() => Car)
    async findOneCar(@Args('id') id: number) {
        return await this.carService.findOne(id);
    }

    @Mutation(() => Car)
    async updateCar(@Args('carUpdateInput') carUpdateInput: CarUpdateInput, @Args('id') id: number) {
        return await this.carService.update(id, carUpdateInput);
    }

    @Mutation(() => Car)
    async removeCar(@Args('id') id: number) {
        return await this.carService.remove(id);
    }
}
