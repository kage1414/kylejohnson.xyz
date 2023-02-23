import { NextApiRequest, NextApiResponse } from 'next';

import {
  addApplicationDescription,
  addDescription,
  addExperienceDescription,
  deleteDescription,
  getDescription,
  updateDescription,
} from 'dbschema/queries';

import { client } from '../../edgedb';

type Body = NextApiRequest['body'];
type Query = NextApiRequest['query'];

interface GetRecordIdParams {
  query: Query;
  body: Body;
}

type GetRecordId = (params: GetRecordIdParams) => string | null;

const getRecordId: GetRecordId = ({ query, body }) => {
  const queryId = query.id;
  const bodyId = body.id;
  const id: string | null = queryId || bodyId || null;
  return id;
};

export default function descriptionHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body, method, query } = req;
  const { description, priority } = body;
  const id = getRecordId({ body, query });
  switch (method) {
    case 'GET':
      if (!id) {
        res.status(400);
      } else {
        getDescription(client, { id: id.toString() })
          .then((value) => {
            res.status(200).json(value);
          })
          .catch((error) => {
            res.write(error);
            res.status(400);
          });
      }
      break;
    case 'PUT':
      if (!id || !description) {
        res.status(400);
      } else {
        updateDescription(client, {
          id: id.toString(),
          description: description.toString(),
          priority,
        })
          .then((value) => {
            res.status(200).json(value);
          })
          .catch((error) => {
            res.write(error);
            res.status(400);
          });
      }
      break;
    case 'POST':
      const { link, record_id } = body;
      if (!record_id || typeof record_id !== 'string' || !link) {
        res.status(400).end();
      } else {
        switch (link) {
          case 'experience':
            addDescription(client, { description }).then(
              ({ id: description_id, description: inserted_description }) => {
                addExperienceDescription(client, {
                  description_id,
                  experience_id: record_id,
                }).then(() => {
                  res.status(200).json({
                    id: description_id,
                    description: inserted_description,
                  });
                });
              }
            );
            break;
          case 'application':
            addDescription(client, { description }).then(
              ({ id: description_id, description: inserted_description }) => {
                addApplicationDescription(client, {
                  description_id,
                  application_id: record_id,
                }).then(() => {
                  res.status(200).json({
                    id: description_id,
                    description: inserted_description,
                  });
                });
              }
            );
            break;
          default:
            addDescription(client, { description }).then(
              ({ id: description_id, description: inserted_description }) => {
                res.status(200).json({
                  id: description_id,
                  description: inserted_description,
                });
              }
            );
        }
      }
      break;
    case 'DELETE':
      if (!id) {
        res.status(400);
      } else {
        deleteDescription(client, {
          id: id.toString(),
        })
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
