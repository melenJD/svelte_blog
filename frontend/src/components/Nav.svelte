<script>
  import { link } from 'svelte-spa-router'
  import active from 'svelte-spa-router/active'
</script>

<nav>
  <a href="/" use:link use:active>Home</a>
  <a href="/login" use:link use:active>Login</a>
  <a href="/write" use:link use:active>Write</a>
</nav>

<style>
  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }
</style>