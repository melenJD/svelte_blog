<script>
  import SmallBox from '../components/smallBox.svelte';
  import { link } from 'svelte-spa-router';
</script>

<article>
  <section>
    <div class="container">
      <h1 class="title">MelenJD</h1>
    </div>
    <div class="container">
      <a href="/post" use:link>
        <SmallBox title={"제목1"} content={"ABC Market"} />
      </a>
    </div>
  </section>
</article>

<style>
</style>