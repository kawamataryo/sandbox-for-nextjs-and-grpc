import type { NextApiRequest, NextApiResponse } from 'next';
import { DefaultApi } from '../../../generated_openapi/api/apis';

const defaultAPI = new DefaultApi('http://127.0.0.1:3100');

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const res = await defaultAPI.getPosts();

  nextApiResponse.status(200).json(res);
};
