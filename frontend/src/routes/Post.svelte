<script>
  export let params = [];

  import { push } from 'svelte-spa-router';
  import { isLogin } from '../../store.js';

  let title = 'Title';
  let content = 'loading...';

  fetch(`http://localhost:9090/post/${params.id}`,{
    method: 'POST'
  }).then(function(response) {
      return response.json();
  }).then(function(json) {
    title = json.title;
    content = json.content;
  })

  function removeThis() {
    fetch(`http://localhost:9090/post/remove/${params.id}`,{
      method: 'POST'
    }).then(function(response) {
      return response.json();
    }).then(function(json) {
      push('/');
    })
  }
</script>

<article>
  <section>
    <h1 class="title serif">{title}</h1>
  </section>
  <section>
    <pre>{content}</pre >
  </section>
  {#if $isLogin}
    <section>
      <button class="delbtn" on:click="{ removeThis }">Delete</button>
    </section>
  {/if}
</article>

<style>
  pre {
    font-size: 1.5rem;
  }

  .delbtn {
    background-color: rgb(255, 31, 98);
    outline: none;
    border: none;
    padding: 8px 16px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
  }

  .delbtn:hover {
    background-color: rgb(161, 19, 61);
  }
</style>