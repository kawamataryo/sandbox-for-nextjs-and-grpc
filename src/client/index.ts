import * as express from "express";
import { ParamsDictionary } from "express-serve-static-core";
import {addPost, getPosts} from "./postsClient";

const app = express();

app.get("/", ({}, res) => {
  res.json({ health: "ok" });
});

app.get<ParamsDictionary, any, any, any>(
    "/get-posts",
    async (request, response) => {
      const { name } = request.query;

      try {
        const result = await getPosts();
        response.json({ result });
      } catch (error) {
        response.status(500).json({ error });
      }
    }
);

app.get<ParamsDictionary, any, any, any>(
    "/add-post",
    async (request, response) => {
      const { name } = request.query;

      try {
        const result = await addPost();
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
