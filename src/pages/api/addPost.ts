import type { NextApiRequest, NextApiResponse } from 'next';
import { AddPostRequest, Post } from '../../../generated/posts_pb';
import { apiClient } from '../../lib/apiClient';

export default async (
  nextApiRequest: NextApiRequest,
  nextApiResponse: NextApiResponse
) => {
  const body = JSON.parse(nextApiRequest.body);

  if (nextApiRequest.method !== 'POST') {
    nextApiResponse.status(400).json('Bad request.');
    return;
  }

  const res = await new Promise((resolve, reject) => {
    const addPostRequest = new AddPostRequest();
    const post = new Post();
    post.setTitle(body.title);
    post.setContent(body.content);

    addPostRequest.setPost(post);

    apiClient.addPost(addPostRequest, (error, response) => {
      if (error) {
        console.error(error);
        reject({
          code: error?.code || 500,
          message: error?.message || 'something went wrong',
        });
      }

      return resolve(response?.toObject());
    });
  });

  nextApiResponse.statusCode = 200;
  nextApiResponse.json(res);
};
