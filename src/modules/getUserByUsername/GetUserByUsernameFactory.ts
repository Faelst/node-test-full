import { PrismaUsersRepository } from '../../repositories/prisma/PrismaUsersRepository';
import { GetUserByUsernameController } from './GetUserByUsernameController';
import { GetUserByUsernameService } from './GetUserByUsernameService';

export const getUserByUsername = () => {
  const getUserByUsernameRepository = new PrismaUsersRepository();

  const getUserByUsername = new GetUserByUsernameService(
    getUserByUsernameRepository
  );

  const getUserByUsernameController = new GetUserByUsernameController(
    getUserByUsername
  );

  return getUserByUsernameController;
};
