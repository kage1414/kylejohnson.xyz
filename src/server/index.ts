import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const publicPath = path.join(__dirname, '..', 'client', 'dist');
const PROD = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
const { applications, education, technical_skills } = require('./mock-db');
// import { filterInactive } from './utils';
import experience from './experience';

if (!PROD) {
  app.use(cors());
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(publicPath, { dotfiles: 'allow' }));

app.get('/api/applications', (req: Request, res: Response) => {
  res.send(applications);
});

app.get('/api/education', (req: Request, res: Response) => {
  res.send(education);
});

app.get('/api/experience', experience.get);

app.get('/api/technical_skills', (req: Request, res: Response) => {
  res.send(technical_skills);
});

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log('Listening on port,', PORT);
});
