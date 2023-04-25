import { baseURL } from '@/api';
import { rest } from 'msw';
import mockData from './mockData';

export const handlers = [
  rest.get(baseURL, (req, res, ctx) => {
    return res(ctx.json(mockData));
  }),
];
