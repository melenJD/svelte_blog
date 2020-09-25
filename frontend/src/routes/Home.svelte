<script>
  import SmallBox from '../components/smallBox.svelte';
  import Slider from '../components/slider.svelte';
  import { link } from 'svelte-spa-router';

  let items = [
    {title: '파국', content: '파아아국이다'},
    {title: '드리퍼', content: '드리리이이이이입'}
  ]
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
      {#each items as item}
        <SmallBox title={item.title} content={item.content} />
      {/each}
    </a>
  </section>
</article>

<style>
</style>