import * as express from "express";
import { ParamsDictionary } from "express-serve-static-core";
import {addSong, getSongs} from "./songsClient";

const app = express();

app.get("/", ({}, res) => {
  res.json({ health: "ok" });
});

app.get<ParamsDictionary, any, any, any>(
    "/get-songs",
    async (request, response) => {
      const { name } = request.query;

      try {
        const result = await getSongs();
        response.json({ result });
      } catch (error) {
        response.status(500).json({ error });
      }
    }
);

app.get<ParamsDictionary, any, any, any>(
    "/add-song",
    async (request, response) => {
      const { name } = request.query;

      try {
        const result = await addSong();
        response.json({ result });
      } catch (error) {
        response.status(500).json({ error });
      }
    }
);

const port = 3000
app.listen(port, () =>
    console.log(`Express server listening on port ${port}`)
);
