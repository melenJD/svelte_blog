<script>
  import { push } from 'svelte-spa-router';

  import { isLogin, errorMessage, errorPage, showLoadingPage } from '../../store.js';
  let title = '';
  let content = '';
  function init() {
    if ($isLogin == false) {
      push('/');
      errorMessage.set('접근 권한이 없습니다');
      errorPage.set(true);
    }
  }

  init();

  function writePost() {
    showLoadingPage.set(true);
    fetch('http://melen.kr/post/write', {
      method: 'POST',
      body: JSON.stringify({
        title: title,
        content: content
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((response) => {
      return response.json();
    }).then((json) => {
      showLoadingPage.set(false);
      console.log(json.insertId);
      push(`/post/${json.insertId}`);
    })
  }
</script>

<article>
  <section>
    <h1 class="title serif">Write</h1>
  </section>
  <section>
    <label for="title" class="serif">Title</label>
    <input type="text" bind:value={title} name="title" id="title" autocomplete="off" class="serif">
    <label for="title" class="serif">Content</label>
    <textarea name="content" bind:value={content} id="content" rows="20" autocomplete="off"></textarea>
    <button class="btn" on:click={writePost}>전송</button>
  </section>
</article>

<style>
  input[type="text"],
  textarea {
    background-color: transparent;
    border: none; outline: none;
    border-bottom: 1px solid white;
    color: white;
    display: block;
    width: 100%;
    text-align: center;
    padding: .5rem 0;
  }

  #title {
    font-size: 2rem;
  }

  textarea {
    border-top: 1px solid white;
    resize: none;
  }

  label {
    font-size: 2rem;
    margin: 1rem 0;
  }

  .btn {
    background-color: rgb(255, 31, 98);
    outline: none; border: none;
    color: white;
    width: 100%;
    padding: 10px;
    margin-top: 1rem;
    cursor: pointer;
  }

  .btn:hover {
    background-color: rgb(255, 70, 126);
  }
</style>