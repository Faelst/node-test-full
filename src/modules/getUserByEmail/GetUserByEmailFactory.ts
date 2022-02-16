import { PrismaUsersRepository } from '../../repositories/prisma/PrismaUsersRepository';
import { GetUserByIdController } from '../getUserById/GetUserByIdController';
import { GetUserByIdService } from './GetUserByEmailController';

export const getUserByIdFactory = () => {
  const userRepository = new PrismaUsersRepository();
  const getUserByEmail = new GetUserByIdService(userRepository);
  const getUserByIdController = new GetUserByIdController(getUserByEmail);
  return getUserByIdController;
};
