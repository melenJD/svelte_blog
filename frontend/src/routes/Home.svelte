<script>
  import SmallBox from '../components/smallBox.svelte';
  import Slider from '../components/slider.svelte';
  import { link } from 'svelte-spa-router';

  let items = [];

  fetch('/post/top5',{
    method: 'POST'
  }).then(function(response) {
    return response.json();
  })
  .then(function(json) {
    items = json.data;
  })
</script>

<article>
  <section>
    <h1 class="title serif">MelenJD</h1>
  </section>
  <section>
    <Slider/>
  </section>
  <section id="box-newPost">
    {#each items as item, idx}
      <a href="/post/{item.id}" use:link>
        <SmallBox title={item.title} content={item.content} />
      </a>
    {/each}
  </section>
</article>

<style>
  #box-newPost {
    display: flex;
    justify-content: center;
  }
</style>