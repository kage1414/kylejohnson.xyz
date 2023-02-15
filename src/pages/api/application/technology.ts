import type { NextApiRequest, NextApiResponse } from "next";
import { addApplicationTechnology } from "dbschema/queries";
import { client } from "../../../edgedb";

export default function educationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  switch (method) {
    case "PUT":
      const { id, name, url } = body;
      if (!id) {
        res.status(400);
        return;
      }
      addApplicationTechnology(client, { id, name, url })
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
  }
}
