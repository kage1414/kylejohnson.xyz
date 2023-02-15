import type { NextApiRequest, NextApiResponse } from "next";
import { getAllExperiences, updateExperience } from "dbschema/queries";
import { client } from "../../edgedb";

export default function educationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  switch (method) {
    case "GET": 
      getAllExperiences(client)
        .then((value) => {
          res.status(200).json(value)
        })
        .catch((error) => {
          res.write(JSON.stringify(error));
          res.status(400);
        });
      break;
    case "PUT":
      const { id, employer, position, time, active, priority } = body;
      if (!id) {
        res.status(400);
      } else {
        updateExperience(client, {
          id,
          employer,
          position,
          time,
          active,
          priority,
        })
          .then((value) => {
            res.status(200).json(value)
          })
          .catch((error) => {
            res.write(error);
            res.status(400);
          });
      }
      break;
  }
}
