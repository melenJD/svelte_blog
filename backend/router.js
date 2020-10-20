import { response, Router } from 'express';

export const router = Router();

router.get('/test', (req, res) => {
  res.send([
    {title: '파아아국1', content: '크크루삥뽕'},
    {title: '드리리이임', content: 'ㅇㅁㅇㄴㅁㅇㄴㅁㅇ'}
  ])
})

router.get('/post/:id', (req, res) => {
  const id = req.params.id;
  let data = {
    title: '',
    content: ''
  }
  if (id == 1) {
    data.title = '파아아국1';
    data.content = '크크루삥뽕';
  } else if (id == 2) {
    data.title = '드리리이임';
    data.content = 'ㅇㅁㅇㄴㅁㅇㄴㅁㅇ';
  }
  res.send(data);
})