import { User } from '../entities/User';

interface IUsersRepository {
  create(user: User): Promise<User>;
  getUserByUsername(username: string): Promise<User | null>;
  getUserByEmail(email: string): Promise<User | null>;
  getUserById(id: string): Promise<User | null>;
  exists(username: string): Promise<boolean>;
}

export { IUsersRepository };
