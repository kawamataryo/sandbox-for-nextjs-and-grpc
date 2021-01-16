// src/client/helloClient.ts
import { SongsClient } from "../../generated/songs_grpc_pb";
import { credentials } from "@grpc/grpc-js";
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import {AddSongsRequest, Song} from "../../generated/songs_pb";

const serverURL = "localhost:8888";
const Client = new SongsClient(
    serverURL,
    credentials.createInsecure()
);

export function getSongs() {
  return new Promise((resolve, reject) => {
    Client.getSongs(new Empty(), (error, response) => {
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

export function addSong() {
  return new Promise((resolve, reject) => {
    const addSongsRequest = new AddSongsRequest();
    const song = new Song()
    song.setTitle('aaa')
    song.setArtist('fff')
    song.setId(1)

    addSongsRequest.setSong(song)

    Client.addSongs(addSongsRequest, (error, response) => {
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
