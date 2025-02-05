import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CartypeService } from '../modules/cartype/cartype.service';
import { CarType, CarTypeCreateInput, CarTypeUpdateInput } from 'src/shared/prismagraphql/car-type';

@Resolver('Cartype')
export class CartypeResolver {
    constructor(private readonly cartypeService: CartypeService) {}

    @Mutation(() => CarType)
    async createCarType(
        @Args('carTypeCreateInput') carTypeCreateInput: CarTypeCreateInput
    ): Promise<CarTypeCreateInput> {
        return await this.cartypeService.create(carTypeCreateInput);
    }

    @Query(() => [CarType], { nullable: true })
    async findAllCarType() {
        return await this.cartypeService.findAll();
    }

    @Query(() => CarType, { nullable: true })
    async findOneCarType(@Args('id') id: number) {
        return await this.cartypeService.findOne(id);
    }

    @Mutation(() => CarType)
    async update(@Args('carTypeUpdateInput') carTypeUpdateInput: CarTypeUpdateInput, @Args('id') id: number) {
        return await this.cartypeService.update(id, carTypeUpdateInput);
    }

    @Mutation(() => CarType)
    async removeCartype(@Args('id') id: number) {
        return await this.cartypeService.remove(id);
    }
}
