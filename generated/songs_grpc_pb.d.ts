// GENERATED CODE -- DO NOT EDIT!

// package: songs
// file: songs.proto

import * as songs_pb from "./songs_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";
import * as grpc from "@grpc/grpc-js";

interface ISongsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  getSongs: grpc.MethodDefinition<google_protobuf_empty_pb.Empty, songs_pb.GetSongsResponse>;
  addSongs: grpc.MethodDefinition<songs_pb.AddSongsRequest, songs_pb.AddSongsResponse>;
}

export const SongsService: ISongsService;

export interface ISongsServer extends grpc.UntypedServiceImplementation {
  getSongs: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, songs_pb.GetSongsResponse>;
  addSongs: grpc.handleUnaryCall<songs_pb.AddSongsRequest, songs_pb.AddSongsResponse>;
}

export class SongsClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  getSongs(argument: google_protobuf_empty_pb.Empty, callback: grpc.requestCallback<songs_pb.GetSongsResponse>): grpc.ClientUnaryCall;
  getSongs(argument: google_protobuf_empty_pb.Empty, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<songs_pb.GetSongsResponse>): grpc.ClientUnaryCall;
  getSongs(argument: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<songs_pb.GetSongsResponse>): grpc.ClientUnaryCall;
  addSongs(argument: songs_pb.AddSongsRequest, callback: grpc.requestCallback<songs_pb.AddSongsResponse>): grpc.ClientUnaryCall;
  addSongs(argument: songs_pb.AddSongsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<songs_pb.AddSongsResponse>): grpc.ClientUnaryCall;
  addSongs(argument: songs_pb.AddSongsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<songs_pb.AddSongsResponse>): grpc.ClientUnaryCall;
}
