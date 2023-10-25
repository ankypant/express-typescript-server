import express from 'express';
import demoRouter from './mocks/demo';

const router = express.Router();

export default (): express.Router => {
  demoRouter(router);

  return router;
};
