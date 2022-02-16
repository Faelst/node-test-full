import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepositories';

class GetUserByIdService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute(id: string): Promise<User> {
    const user = await this.usersRepository.getUserById(id);

    if (!user) {
      throw new Error('User not found!');
    }

    return user;
  }
}

export { GetUserByIdService };
