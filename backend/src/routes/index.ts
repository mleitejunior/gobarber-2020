import { Router } from 'express';

const routes = Router();

routes.post('/users', (request, response) => {
  const { email, name } = request.body;

  const user = {
    name,
    email,
  };

  return response.json(user);
});

export default routes;
