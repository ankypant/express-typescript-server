import express from 'express';
import { getPosts, getUsers } from '../../controller/mocks/users.mock';

export default (router: express.Router) => {
  router.get('/users', getUsers);
  router.get('/posts', getPosts);
};
