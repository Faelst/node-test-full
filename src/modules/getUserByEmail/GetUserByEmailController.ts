import { Request } from 'express';
import { GetUserByIdService } from '../getUserById/GetUserByIdService';

class GetUserByEmailController {
  constructor(private getUserById: GetUserByIdService) {}

  async handle(request: Request, response: Response) {
    const user = request.params;

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}

export { GetUserByIdService };
