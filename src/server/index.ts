import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import {SongsService} from "../../generated/songs_grpc_pb";
import {GetSongsResponse, Song} from "../../generated/songs_pb";

// オンメモリで持つ
const songs: Song[] = []

function getSongs(
    call: ServerUnaryCall<void, GetSongsResponse>,
    callback: sendUnaryData<Song[]>
) {
  callback(null, songs);
}

function addSongs(
    call: ServerUnaryCall<Song, void>,
    callback: sendUnaryData<Song>
) {
  const song = new Song();
  song.setId(call.request.getId());
  song.setArtist(call.request.getTitle());
  song.setTitle(call.request.getTitle());

  songs.push(song)
  callback(null, song);
}

function startServer() {
  const server = new Server();
  server.addService(SongsService, { getSongs, addSongs });
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
