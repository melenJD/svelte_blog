import Home from './routes/Home.svelte';
import Login from './routes/Login.svelte';
import Post from './routes/Post.svelte';
import Write from './routes/Write.svelte'

const routes = {
  '/': Home,
  '/login': Login,
  '/post': Post,
  '/write': Write
}

export default routes;