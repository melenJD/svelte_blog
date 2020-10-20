import express from 'express';
import cors from 'cors';
import { router } from './router';
import { authRouter } from './router/authRouter';
import { connectPool } from './middlewares/mariadb';
import { postRouter } from './router/postRouter';

const app = express();

if (app) {
  console.log('web server app loaded');
}

const PORT = 80;

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.use(cors());

app.get('/', (req, res) => {
  res.sendFile('index.html');
})
app.use('/auth', authRouter);
app.use('/post', postRouter);

connectPool();

app.listen(PORT, (e) => {
  if (e) {
    throw e;
  } else {
    console.log('web server app ready on', PORT);
  }
})