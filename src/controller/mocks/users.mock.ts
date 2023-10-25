import express from 'express';
import axios from 'axios';

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const response = await axios.get('https://jsonplaceholder.org/users');

    if (response.status !== 200) {
      throw new Error('Something went wrong');
    }

    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error
    });
  }
};

export const getPosts = async (req: express.Request, res: express.Response) => {
  try {
    const response = await axios.get('https://jsonplaceholder.org/posts', {
      params: {}
    });

    if (response.status !== 200) {
      throw new Error('Something went wrong');
    }

    return res.json(response.data);
  } catch (error) {
    console.log(error);
    return error;
  }
};
