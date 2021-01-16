import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import {AddPostRequest, AddPostResponse, GetPostsResponse, Post} from "../../generated/posts_pb";
import {PostsService} from "../../generated/posts_grpc_pb";

// オンメモリで持つ
const posts: Post[] = []

function getPosts(
    call: ServerUnaryCall<void, GetPostsResponse>,
    callback: sendUnaryData<GetPostsResponse>
) {
  const res = new GetPostsResponse();
  res.setPostsList(posts)

  callback(null, res);
}

function addPost(
    call: ServerUnaryCall<AddPostRequest, void>,
    callback: sendUnaryData<AddPostResponse>
) {
  const post = new Post();
  post.setId(call.request.getPost().getId())
  post.setTitle(call.request.getPost().getTitle())
  post.setContent(call.request.getPost().getContent())
  posts.push(post)

  const res = new AddPostResponse();
  res.setPost(post);
  callback(null, res);
}

function startServer() {
  const server = new Server();
  server.addService(PostsService, { getPosts, addPost });
  server.bindAsync(
      `0.0.0.0:8888`,
      ServerCredentials.createInsecure(),
      (error, port) => {
        if (error) {
          console.error(error);
        }

        server.start();
        console.log(`server start listing on port ${port}`);
      }
  );
}

startServer();
