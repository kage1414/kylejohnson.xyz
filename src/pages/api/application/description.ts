import type { NextApiRequest, NextApiResponse } from "next";
import { addApplicationDescription } from "dbschema/queries";
import { client } from "../../../edgedb";

export default function educationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  switch (method) {
    case "PUT":
      const { id, description } = body;
      if (!id) {
        res.status(400);
        return;
      }
      addApplicationDescription(client, { id, description })
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
  }
}
