// src/client/helloClient.ts
import { credentials } from "@grpc/grpc-js";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import {PostsClient} from "../../generated/posts_grpc_pb";
import {AddPostRequest, Post} from "../../generated/posts_pb";

const serverURL = "localhost:8888";
const Client = new PostsClient(
    serverURL,
    credentials.createInsecure()
);

export function getPosts() {
  return new Promise((resolve, reject) => {
    Client.getPosts(new Empty(), (error, response) => {
      if (error) {
        console.error(error);
        reject({
          code: error?.code || 500,
          message: error?.message || "something went wrong",
        });
      }

      return resolve(response.toObject());
    });
  });
}

export function addPost() {
  return new Promise((resolve, reject) => {
    const addPostRequest = new AddPostRequest();
    const post = new Post()
    post.setId(1)
    post.setTitle('aaa')
    post.setContent('fff')

    addPostRequest.setPost(post)

    Client.addPost(addPostRequest, (error, response) => {
      if (error) {
        console.error(error);
        reject({
          code: error?.code || 500,
          message: error?.message || "something went wrong",
        });
      }

      return resolve(response.toObject());
    });
  });
}
