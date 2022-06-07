import { User } from "../entities/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => [User])
  async users(): Promise<User[]> {
    const users = await User.find();

    return users;
  }

  @Mutation(() => User)
  async createUser(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string
  ): Promise<User> {
    const newUser = new User();

    newUser.firstName = firstName;
    newUser.lastName = lastName;

    const savedUser = await newUser.save();

    console.log(savedUser);

    return savedUser;
  }
}
