import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import Post from './routes/Post.svelte';
import Write from './routes/Write.svelte';
import Posts from './routes/Posts.svelte';

const routes = {
  '/': Home,
  '/login': Login,
  '/post/:id': Post,
  '/write': Write,
  '/posts': Posts
}

export default routes;