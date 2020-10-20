<script>
  export let params = [];

  let title = 'Title';
  let content = 'loading...';

  fetch(`http://localhost:9090/post/${params.id}`,{
    method: 'POST'
  }).then(function(response) {
      return response.json();
    })
    .then(function(json) {
      title = json.title;
      content = json.content;
    })
</script>

<article>
  <section>
    <h1 class="title serif">{title}</h1>
  </section>
  <section>
    <pre>{content}</pre >
  </section>
</article>

<style>
  pre {
    font-size: 1.5rem;
  }
</style>