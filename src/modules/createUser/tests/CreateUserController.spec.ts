/**
 * @jest-environment ./prisma/prisma-environment-jest
 */

import request from 'supertest';
import { app } from '../../../app';
import { v4 as uuid } from 'uuid';

describe('Create User Controller', () => {
  let api: request.SuperTest<request.Test>;

  beforeAll(() => {
    api = request(app);
  });

  it('should create user successfully', async () => {
    const response = await api.post('/users').send({
      username: `test-${uuid()}`,
      email: `test-${uuid()}@test.com`,
      name: `test-${uuid()}`,
    });

    expect(response.status).toBe(201);
  });
});
