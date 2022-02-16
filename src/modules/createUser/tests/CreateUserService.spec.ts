import { UsersRepositoryInMemory } from '../../../repositories/in-memory/UsersRepositoryInMemory';
import { IUsersRepository } from '../../../repositories/IUsersRepositories';
import { CreateUserService } from '../CreateUserService';

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
      username: 'test',
      email: 'test-admin@test.com',
      name: 'test',
    });

    expect(user).toBeDefined();
    expect(user).toHaveProperty('id');
    expect(user.id).toBeDefined();
    expect(user.username).toBe('test');
  });

  it('should throw error when user already exists', async () => {
    const userTest = {
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
