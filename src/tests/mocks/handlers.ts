import { rest } from 'msw';
import mockData from './mockData';
import { baseURL } from '@/constants';

export const handlers = [
  rest.get(baseURL, (req, res, ctx) => {
    return res(ctx.json(mockData));
  }),
];
