<script>
  import { link } from 'svelte-spa-router';
  import { isLogin } from '../../store.js';
  import active from 'svelte-spa-router/active';
</script>

<nav>
  <a href="/" use:link use:active>Home</a>
  {#if $isLogin}
    <a href="/write" use:link use:active>Write</a>
  {/if}
  {#if !($isLogin)}
  <a href="/login" use:link use:active>Login</a>
  {/if}
  <a href="/posts" use:link use:active>Posts</a>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
</style>