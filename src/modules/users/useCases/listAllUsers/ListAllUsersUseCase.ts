import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const currentUser = this.usersRepository.findById(user_id);
    const listOfUsers = this.usersRepository.list();

    if (!currentUser.admin) {
      throw new Error("User is not admin!");
    }

    return listOfUsers;
  }
}

export { ListAllUsersUseCase };
