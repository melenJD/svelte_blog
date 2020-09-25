<script>
  import { link } from 'svelte-spa-router';
</script>

<header>
  <div class="header-left">
    <a href="/" use:link>Melen.kr</a>
  </div>
  <div class="header-right">
    <a href="/login" use:link><i class="xi-user"></i> Sign in</a>
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

  .header-right a {
    padding: .5rem 1rem;
    background-color: rgb(255, 31, 98);
    display: block;
    border-radius: 5px;
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