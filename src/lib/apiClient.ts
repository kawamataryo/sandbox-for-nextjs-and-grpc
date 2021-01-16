// src/client/helloClient.ts
import { credentials } from '@grpc/grpc-js';
import { PostsClient } from '../../generated/posts_grpc_pb';

const serverURL = 'localhost:8888';
export const apiClient = new PostsClient(
  serverURL,
  credentials.createInsecure()
);
