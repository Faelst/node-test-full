import { CreateUserController } from '../CreateUserController';
import request from 'supertest';
import { app } from '../../../app';

describe('Create User Controller', () => {
  let api: request.SuperTest<request.Test>;

  beforeAll(() => {
    api = request(app);
  });

  it('should create user successfully', async () => {
    const response = await api.post('/users').send({
      name: 'test',
      username: 'test',
      email: 'test@test.com',
    });

    console.log(response);
    expect(response.status).toBe(201);
  });
});
