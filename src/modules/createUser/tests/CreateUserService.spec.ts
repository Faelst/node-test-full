import { UsersRepositoryInMemory } from '../../../repositories/in-memory/UsersRepositoryInMemory';
import { IUsersRepository } from '../../../repositories/IUsersRepositories';
import { CreateUserService } from '../CreateUserService';
import { v4 as uuid } from 'uuid';

describe('When create user', () => {
  let userRepository: IUsersRepository;
  let createUserService: CreateUserService;

  beforeAll(() => {
    userRepository = new UsersRepositoryInMemory();
    createUserService = new CreateUserService(
      userRepository
    ) as CreateUserService;
  });

  afterAll(() => {});

  it('should create successfully', async () => {
    const user = await createUserService.execute({
      id: uuid(),
      username: `test-${uuid()}`,
      email: `test-${uuid()}@test.com`,
      name: `test-${uuid()}`,
    });

    expect(user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user.id).toBeDefined();
  });

  it('should throw error when user already exists', async () => {
    const userTest = {
      id: 'abc-123',
      username: 'test',
      email: 'test-admin@test.com',
      name: 'test',
    };

    await createUserService.execute(userTest);

    expect(createUserService.execute(userTest)).rejects.toThrowError(
      'User already exists!'
    );
  });
});
