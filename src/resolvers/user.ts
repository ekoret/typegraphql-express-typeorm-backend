import { User } from "../entities/User";
import { Arg, Mutation, Query, Resolver } from "type-graphql";

@Resolver()
export class UserResolver {
  @Query(() => String)
  users() {
    return User.find();
  }

  @Mutation(() => User)
  createUser(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string
  ): User {
    const newUser = User.create({
      firstName,
      lastName,
    });

    return newUser;
  }
}
