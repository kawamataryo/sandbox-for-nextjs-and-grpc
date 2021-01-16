// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var songs_pb = require('./songs_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_songs_AddSongsRequest(arg) {
  if (!(arg instanceof songs_pb.AddSongsRequest)) {
    throw new Error('Expected argument of type songs.AddSongsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs_AddSongsRequest(buffer_arg) {
  return songs_pb.AddSongsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_songs_AddSongsResponse(arg) {
  if (!(arg instanceof songs_pb.AddSongsResponse)) {
    throw new Error('Expected argument of type songs.AddSongsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs_AddSongsResponse(buffer_arg) {
  return songs_pb.AddSongsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_songs_GetSongsResponse(arg) {
  if (!(arg instanceof songs_pb.GetSongsResponse)) {
    throw new Error('Expected argument of type songs.GetSongsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_songs_GetSongsResponse(buffer_arg) {
  return songs_pb.GetSongsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SongsService = exports.SongsService = {
  getSongs: {
    path: '/songs.Songs/GetSongs',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: songs_pb.GetSongsResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_songs_GetSongsResponse,
    responseDeserialize: deserialize_songs_GetSongsResponse,
  },
  addSongs: {
    path: '/songs.Songs/AddSongs',
    requestStream: false,
    responseStream: false,
    requestType: songs_pb.AddSongsRequest,
    responseType: songs_pb.AddSongsResponse,
    requestSerialize: serialize_songs_AddSongsRequest,
    requestDeserialize: deserialize_songs_AddSongsRequest,
    responseSerialize: serialize_songs_AddSongsResponse,
    responseDeserialize: deserialize_songs_AddSongsResponse,
  },
};

exports.SongsClient = grpc.makeGenericClientConstructor(SongsService);
