import { Router } from 'express';
import { doQuery } from '../middlewares/mariadb';

export const authRouter = Router();

authRouter.post('/login', async (req, res) => {
  const name = req.query.name;
  const password = req.query.password;
  console.log(name, password);

  const r = await doQuery('SELECT * FROM users WHERE name = ?', [name]);
  const r2 = await doQuery('SELECT * FROM users WHERE name = ? AND password = ?', [name, password]);
  if (r[0]) {
    if (r2[0]) {
      res.send({
        status: 'LOGIN_SUCCESS',
        username: name,
        nickname: r[0].nickname
      })
    } else {
      res.send({
        status: 'WRONG_PASSWORD'
      })
    }
  } else {
    res.send({
      status: 'WRONG_ACCOUNT'
    })
  }
})