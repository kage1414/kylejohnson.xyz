import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const PROD = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
import mock from './mock-db';
const { applications, education, technical_skills } = mock;
import experience from './experience';
import { sequelize } from './db/sequelize';

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
  res.sendFile(path.join(publicPath, 'index.html'));
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('Listening on port,', PORT);
  });
});
