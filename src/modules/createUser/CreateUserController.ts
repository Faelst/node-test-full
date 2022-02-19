import { Request, Response } from 'express';
import { CreateUserService } from './CreateUserService';

class CreateUserController {
  constructor(private createUser: CreateUserService) {}

  async handle(request: Request, response: Response) {
    const { id, email, username, name } = request.body;
    const user = await this.createUser.execute({ id, email, username, name });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
