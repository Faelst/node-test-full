import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepositories';

class GetUserByUsernameService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(username: string): Promise<User> {
    const user = await this.usersRepository.getUserByUsername(username);

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }
}

export { GetUserByUsernameService };
