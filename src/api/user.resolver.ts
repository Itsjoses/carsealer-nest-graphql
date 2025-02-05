import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCreateResponse } from 'src/modules/user/dto/user-create-response';
import { LoginDto } from 'src/modules/user/dto/user-login-dto';
import { UserService } from 'src/modules/user/user.service';
import { User, UserCreateInput, UserUpdateInput } from 'src/shared/prismagraphql/user';

@Resolver('User')
export class UserResolver {
    constructor(private readonly userService: UserService) {}

    @Mutation(() => UserCreateResponse)
    async createUser(@Args('userCreateInput') userCreateInput: UserCreateInput): Promise<UserCreateResponse> {
        return await this.userService.create(userCreateInput);
    }

    @Mutation(() => UserCreateResponse)
    async userLogin(@Args('userLogin') loginDto: LoginDto): Promise<UserCreateResponse> {
        return await this.userService.login(loginDto);
    }

    @Query(() => User, { nullable: true })
    async findUser(@Args('id') id: number) {
        return await this.userService.findOne(id);
    }

    @Mutation(() => User)
    async updateUser(@Args('userUpdateInput') userUpdateInput: UserUpdateInput, @Args('id') id: number) {
        return await this.userService.update(userUpdateInput, id);
    }
}
