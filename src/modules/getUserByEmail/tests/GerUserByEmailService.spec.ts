import { UsersRepositoryInMemory } from '../../../repositories/in-memory/UsersRepositoryInMemory';
import { IUsersRepository } from '../../../repositories/IUsersRepositories';
import { CreateUserService } from '../../createUser/CreateUserService';
import { v4 as uuid } from 'uuid';
import { GetUserByIdService } from '../GetUserByEmailController';
import { IUserRequest } from '../../../modules/createUser/CreateUserService';

describe('Get User By Id Service', () => {
  let userRepository: IUsersRepository;
  let createUserService: CreateUserService;
  let getUserByIdService: GetUserByIdService;
  let USER_TEST: Promise<IUserRequest> | any;

  describe('When get user by id', () => {
    beforeAll(async () => {
      userRepository = new UsersRepositoryInMemory();
      createUserService = new CreateUserService(
        userRepository
      ) as CreateUserService;
      getUserByIdService = new GetUserByIdService(userRepository);

      USER_TEST = await createUserService.execute({
        id: '',
        username: `test-${uuid()}`,
        email: `test-${uuid()}@test.com`,
        name: `test-${uuid()}`,
      });
    });

    afterAll(() => {});

    it('Should return a user correct', async () => {
      const user = await getUserByIdService.execute(USER_TEST.id);

      expect(user).toBe(USER_TEST);
    });

    it('Should pass incorrect id', async () => {
      expect(getUserByIdService.execute('INCORRECT-ID')).rejects.toThrowError(
        'User not found!'
      );
    });
  });
});
