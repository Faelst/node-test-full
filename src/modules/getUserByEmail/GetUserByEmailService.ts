import { IUsersRepository } from '../../repositories/IUsersRepositories';

class GetUserByEmailService {
  constructor(private userRepository: IUsersRepository) {}

  async execute(email: string) {
    const user = await this.userRepository.getUserByEmail(email);

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
