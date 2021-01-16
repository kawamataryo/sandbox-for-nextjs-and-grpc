// package: songs
// file: songs.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Song extends jspb.Message {
  getId(): number;
  setId(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getArtist(): string;
  setArtist(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Song.AsObject;
  static toObject(includeInstance: boolean, msg: Song): Song.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Song, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Song;
  static deserializeBinaryFromReader(message: Song, reader: jspb.BinaryReader): Song;
}

export namespace Song {
  export type AsObject = {
    id: number,
    title: string,
    artist: string,
  }
}

export class GetSongsResponse extends jspb.Message {
  clearSongsList(): void;
  getSongsList(): Array<Song>;
  setSongsList(value: Array<Song>): void;
  addSongs(value?: Song, index?: number): Song;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetSongsResponse): GetSongsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetSongsResponse;
  static deserializeBinaryFromReader(message: GetSongsResponse, reader: jspb.BinaryReader): GetSongsResponse;
}

export namespace GetSongsResponse {
  export type AsObject = {
    songsList: Array<Song.AsObject>,
  }
}

export class AddSongsRequest extends jspb.Message {
  hasSong(): boolean;
  clearSong(): void;
  getSong(): Song | undefined;
  setSong(value?: Song): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsRequest): AddSongsRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSongsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsRequest;
  static deserializeBinaryFromReader(message: AddSongsRequest, reader: jspb.BinaryReader): AddSongsRequest;
}

export namespace AddSongsRequest {
  export type AsObject = {
    song?: Song.AsObject,
  }
}

export class AddSongsResponse extends jspb.Message {
  hasSong(): boolean;
  clearSong(): void;
  getSong(): Song | undefined;
  setSong(value?: Song): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddSongsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: AddSongsResponse): AddSongsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddSongsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddSongsResponse;
  static deserializeBinaryFromReader(message: AddSongsResponse, reader: jspb.BinaryReader): AddSongsResponse;
}

export namespace AddSongsResponse {
  export type AsObject = {
    song?: Song.AsObject,
  }
}

