import request from 'adapters/request';

export const getTodos = async () => {
    try {
      const { data } = await request('GET', '/todos');
      return data;
    } catch (error) {
      throw new Error('Unable to get todos');
    }
  };