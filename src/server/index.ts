import express, { Request, Response } from 'express';
import path from 'path';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
const publicPath = path.join(__dirname, '..', 'dist');
const PROD = process.env.NODE_ENV === 'production';
const PORT = process.env.PORT || 3000;
import experience from './controllers/experience';
import application from './controllers/application';
import education from './controllers/education';
import technical_skills from './controllers/technical_skills';
import description from './controllers/description';
import technology from './controllers/technology';
import tech_stack from './controllers/tech_stack';

if (!PROD) {
  app.use(cors());
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(express.static(publicPath, { dotfiles: 'allow' }));

app.get('/api/applications', application.get);
app.put('/api/application', application.put);

app.put('/api/application/description', description.putApplication);
app.put('/api/application/technology', technology.putApplication);

app.get('/api/education', education.get);

app.get('/api/description', description.get);

app.put('/api/description', description.put);

app.get('/api/experience', experience.get);
app.put('/api/experience', experience.put);

app.get('/api/technical_skills', technical_skills.get);

app.get('/api/technologies', technology.get);

app.get('/api/tech_stacks', tech_stack.get);

app.get('*', (req: Request, res: Response) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
});
