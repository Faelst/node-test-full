import { Request, Response } from 'express';
import { GetUserByUsernameService } from './GetUserByUsernameService';

class GetUserByUsernameController {
  constructor(private getUserByUsername: GetUserByUsernameService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { username } = request.params;

    const user = await this.getUserByUsername.execute(username);

    return response.json(user);
  }
}

export { GetUserByUsernameController };
