import { Router } from 'express';
import { doQuery } from '../middlewares/mariadb';

export const postRouter = Router();

postRouter.post('/write', async (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const r = await doQuery('INSERT INTO posts(title,content,writer) VALUES(?,?,1)', [title, content]);

  res.send({
    insertId: r.insertId
  })
})

postRouter.post('/slide', async (req, res) => {
  const r = await doQuery('SELECT id, title, content FROM posts WHERE id=?',[27]);

  res.send({
    data: r[0]
  })
})

postRouter.post('/top5', async (req, res) => {
  const r = await doQuery('SELECT id, title, content FROM posts ORDER BY id DESC LIMIT 0,5',[]);

  res.send({
    data: r
  })
})

postRouter.post('/page/:id', async (req, res) => {
  const r = await doQuery('SELECT * FROM posts ORDER BY id desc', []);

  res.send({
    data: r
  })
})

postRouter.post('/remove/:id', async (req, res) => {
  const id = req.params.id;
  const r = await doQuery('DELETE FROM posts WHERE id=?', [id]);

  res.send({
    data: r
  })
})

postRouter.post('/:id', async (req, res) => {
  const id = req.params.id;
  const r = await doQuery('SELECT title, content FROM posts WHERE id = ?', [id]);

  res.send({
    title: r[0].title,
    content: r[0].content
  })
})