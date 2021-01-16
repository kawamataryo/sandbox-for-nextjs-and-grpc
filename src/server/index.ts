import {
  sendUnaryData,
  Server,
  ServerCredentials,
  ServerUnaryCall,
} from "@grpc/grpc-js";
import {SongsService} from "../../generated/songs_grpc_pb";
import {AddSongsRequest, AddSongsResponse, GetSongsResponse, Song} from "../../generated/songs_pb";

// オンメモリで持つ
const songs: Song[] = []

function getSongs(
    call: ServerUnaryCall<void, GetSongsResponse>,
    callback: sendUnaryData<GetSongsResponse>
) {
  const songsResponse = new GetSongsResponse();
  songs.push(new Song())
  songsResponse.setSongsList(songs)

  callback(null, songsResponse);
}

function addSongs(
    call: ServerUnaryCall<AddSongsRequest, void>,
    callback: sendUnaryData<AddSongsResponse>
) {
  const song = new Song();
  song.setId(call.request.getSong().getId())
  song.setTitle(call.request.getSong().getTitle())
  song.setArtist(call.request.getSong().getArtist())

  const response = new AddSongsResponse();
  response.setSong(song);
  songs.push(song)
  callback(null, response);
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
