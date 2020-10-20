<script>
  import { link } from 'svelte-spa-router';

  
  let data = [];

  fetch(`/post/page/1`, {
    method: 'POST'
  }).then(function(response) {
    return response.json();
  }).then(function(json) {
    data = json.data;
  })
</script>

<section>
  <h1 class="serif title">POSTS</h1>
</section>
<section>
  <table class="table">
    <thead>
      <tr>
        <th>번호</th>
        <th>게시글 제목</th>
      </tr>
    </thead>
    <tbody>
      {#each data as post, idx}
          <tr>
            <th>{post.id}</th>
            <td><a href='/post/{post.id}' use:link>{post.title}</a></td>
          </tr>
      {/each}
    </tbody>
  </table>
</section>

<style>

.table {
  width: 90%;
}

.table a {
  display: block;
  padding: .5rem;
  margin: .25rem;
  background-color: white;
  border-radius: 5px;
  color: black;
}

.table a:hover {
  background-color: rgb(255, 31, 98);
  color: white;
}
</style>