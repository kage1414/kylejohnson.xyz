import mock from './mock-db';
import Experience from './db/models/experience';
import { FiberPinRounded } from '@mui/icons-material';
import { Request, Response } from 'express';

const get = (req: Request, res: Response) => {
  res.send(mock.experience);
};

export default { get };
