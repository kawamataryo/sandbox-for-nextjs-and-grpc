import type { NextApiRequest, NextApiResponse } from 'next'
import {Empty} from "google-protobuf/google/protobuf/empty_pb";
import {apiClient} from "../../lib/apiClient";

export default async (nextApiRequest: NextApiRequest, nextApiResponse: NextApiResponse) => {
  const res = await new Promise((resolve, reject) => {
    apiClient.getPosts(new Empty(), (error, response) => {
      if (error) {
        console.error(error);
        reject({
          code: error?.code || 500,
          message: error?.message || "something went wrong",
        });
      }

      return resolve(response?.toObject());
    });
  });

  nextApiResponse.status(200).json(res)
}
