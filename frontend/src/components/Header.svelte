<script>
import { push } from 'svelte-spa-router';

  import { link } from 'svelte-spa-router';
  import { isLogin, username, nickname } from '../../store.js';

  function logout() {
    isLogin.set(false);;
    username.set('');
    nickname.set('');
    push('/');
  }
</script>

<header>
  <div class="header-left">
    <a href="/" use:link>Melen.kr</a>
  </div>
  <div class="header-right">
    {#if !($isLogin)}
      <a href="/login" class="btn" use:link><i class="xi-user"></i> Sign in</a>
    {:else}
      <span class="mr-4">{$nickname} [{$username}] 님 환영합니다!</span>
      <span class="btn" on:click={logout}><i class="xi-user"></i> Sign Out</span>
    {/if}
  </div>
</header>

<style>
  header {
    display: flex;
    padding: 1rem 0;
    align-items: center;
  }

  .header-left {
    margin-right: auto;
    margin-left: 100px;
  }

  .header-left a {
    font-size: 2rem;
    border-radius: 5px;
  }

  .header-right {
    margin-left: auto;
    margin-right: 100px;
  }

  .header-right a,
  .header-right span {
    color: white;
  }

  .btn {
    cursor: pointer;
    padding: .5rem 1rem;
    background-color: rgb(255, 31, 98);
    display: inline-block;
    border-radius: 5px;
  }

  .mr-4 {
    margin-right: 1rem;
  }

  @media screen and (max-width: 768px) {
    header {
      flex-direction: column;
    }

    .header-right,
    .header-left {
      margin-left: auto;
      margin-right: auto;
    }

    .header-right {
      margin-top: 1rem;
    }
  }
</style>