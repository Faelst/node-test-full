import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepositories';

interface IUserRequest {
  id: string;
  name: string;
  username: string;
  email: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ id, email, username, name }: IUserRequest) {
    const userAlreadyExists = await this.usersRepository.exists(username);

    if (userAlreadyExists) {
      throw new Error('User already exists!');
    }

    const userCreate = User.create({ id, email, username, name });
    const user = await this.usersRepository.create(userCreate);
    return user;
  }
}

export { CreateUserService, IUserRequest };
