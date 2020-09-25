<script>
  import SmallBox from '../components/smallBox.svelte';
  import Slider from '../components/slider.svelte';
  import { link } from 'svelte-spa-router';
</script>

<article>
  <section>
    <h1 class="title serif">MelenJD</h1>
  </section>
  <section>
    <Slider/>
  </section>
  <section>
    <a href="/post" use:link>
      <SmallBox title={"제목1"} content={"ABC Market"} />
    </a>
  </section>
</article>

<style>
</style>