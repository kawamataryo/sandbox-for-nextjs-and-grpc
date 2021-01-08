// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var posts_pb = require('./posts_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_Posts_AddPostRequest(arg) {
  if (!(arg instanceof posts_pb.AddPostRequest)) {
    throw new Error('Expected argument of type Posts.AddPostRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Posts_AddPostRequest(buffer_arg) {
  return posts_pb.AddPostRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Posts_AddPostResponse(arg) {
  if (!(arg instanceof posts_pb.AddPostResponse)) {
    throw new Error('Expected argument of type Posts.AddPostResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Posts_AddPostResponse(buffer_arg) {
  return posts_pb.AddPostResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Posts_GetPostsResponse(arg) {
  if (!(arg instanceof posts_pb.GetPostsResponse)) {
    throw new Error('Expected argument of type Posts.GetPostsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Posts_GetPostsResponse(buffer_arg) {
  return posts_pb.GetPostsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}


var PostsService = exports.PostsService = {
  getPosts: {
    path: '/Posts.Posts/GetPosts',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: posts_pb.GetPostsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_Posts_GetPostsResponse,
    responseDeserialize: deserialize_Posts_GetPostsResponse,
  },
  addPost: {
    path: '/Posts.Posts/AddPost',
    requestStream: false,
    responseStream: false,
    requestType: posts_pb.AddPostRequest,
    responseType: posts_pb.AddPostResponse,
    requestSerialize: serialize_Posts_AddPostRequest,
    requestDeserialize: deserialize_Posts_AddPostRequest,
    responseSerialize: serialize_Posts_AddPostResponse,
    responseDeserialize: deserialize_Posts_AddPostResponse,
  },
};

exports.PostsClient = grpc.makeGenericClientConstructor(PostsService);
