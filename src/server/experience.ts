const { experience: experience_mock } = require('./mock-db');
import Experience from './db/models/experience';
import { FiberPinRounded } from '@mui/icons-material';
import { Request, Response } from 'express';

const get = (req: Request, res: Response) => {
  res.send(experience_mock);
};

export default { get };
