import { Request, Response } from 'express';
import { GetUserByIdService } from './GetUserByIdService';

class GetUserByIdController {
  constructor(private getUserById: GetUserByIdService) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const user = await this.getUserById.execute(id);

    return response.json(user);
  }
}

export { GetUserByIdController };
