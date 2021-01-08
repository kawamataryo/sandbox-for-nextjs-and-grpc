// package: Posts
// file: posts.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Post extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getContent(): string;
  setContent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: number,
    title: string,
    content: string,
  }
}

export class GetPostsResponse extends jspb.Message {
  clearPostsList(): void;
  getPostsList(): Array<Post>;
  setPostsList(value: Array<Post>): void;
  addPosts(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPostsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetPostsResponse): GetPostsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetPostsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPostsResponse;
  static deserializeBinaryFromReader(message: GetPostsResponse, reader: jspb.BinaryReader): GetPostsResponse;
}

export namespace GetPostsResponse {
  export type AsObject = {
    postsList: Array<Post.AsObject>,
  }
}

export class AddPostRequest extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): Post | undefined;
  setPost(value?: Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddPostRequest): AddPostRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPostRequest;
  static deserializeBinaryFromReader(message: AddPostRequest, reader: jspb.BinaryReader): AddPostRequest;
}

export namespace AddPostRequest {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class AddPostResponse extends jspb.Message {
  hasPost(): boolean;
  clearPost(): void;
  getPost(): Post | undefined;
  setPost(value?: Post): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddPostResponse): AddPostResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddPostResponse;
  static deserializeBinaryFromReader(message: AddPostResponse, reader: jspb.BinaryReader): AddPostResponse;
}

export namespace AddPostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

