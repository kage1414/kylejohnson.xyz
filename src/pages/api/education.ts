import { NextApiRequest, NextApiResponse } from 'next';
import { getAllEducations, updateEducation } from 'dbschema/queries';
import { client } from '../../edgedb';

export default function educationHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method } = req;
  switch (method) {
    case 'GET':
      getAllEducations(client)
        .then((value) => {
          res.status(200).json(value);
        })
        .catch((error) => {
          res.write(error);
          res.status(400);
        });
      break;
    case 'PUT':
      const { id } = body;
      if (!id) {
        res.status(400);
        return;
      } else {
        updateEducation(client, body)
          .then((value) => {
            res.status(200).json(value);
          })
          .catch((error) => {
            res.write(error);
            res.status(400);
          });
      }
      break;
  }
}
