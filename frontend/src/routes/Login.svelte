<script>
import { push } from 'svelte-spa-router';

  import { showLoadingPage, isLogin, username, nickname } from '../../store.js';

  let name = '';
  let pass = '';

  let account_empty = false;
  let password_empty = false;
  let wrong_account = false;
  let wrong_password = false;

  function resetError() {
    account_empty = password_empty = wrong_account = wrong_password = false;
  }

  function cancelLoading() {
    showLoadingPage.set(false);
  }

  function login(e) {
    if (name != '' && pass != '') {
      e.preventDefault();
      showLoadingPage.set(true);
      fetch(`http://localhost:9090/auth/login?name=${name}&password=${pass}`,{
        method: 'POST'
      }).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.status == 'LOGIN_SUCCESS') {
          cancelLoading();
          isLogin.set(true);
          username.set(json.username);
          nickname.set(json.nickname);
          push('/');
        } else if (json.status == 'WRONG_ACCOUNT') {
          cancelLoading();
          resetError();
          wrong_account = true;
        } else if (json.status == 'WRONG_PASSWORD') {
          cancelLoading();
          resetError();
          wrong_password = true;
        }
      })
    } else if (name == '') {
      resetError();
      account_empty = true;
    } else if (pass == '') {
      resetError();
      password_empty = true;
    }
  }
</script>

<article> 
  <section>
    <h1 class="title serif">Login</h1>
  </section>
  <section>
    {#if account_empty}
      <p class="input_error">
        <i class="xi-error"></i> 아이디를 입력해주세요
      </p>
    {:else if password_empty}
      <p class="input_error">
        <i class="xi-error"></i> 비밀번호를 입력해주세요
      </p>
    {:else if wrong_account}
      <p class="input_error">
        <i class="xi-error"></i> 잘못된 아이디입니다
      </p>
    {:else if wrong_password}
      <p class="input_error">
        <i class="xi-error"></i> 틀린 비밀번호 입니다
      </p>
    {/if}
  </section>
  <section>
    <form>
      <label class="serif" for="userid">Account</label>
      <input class="serif" type="text" name="userid" bind:value="{name}" id="userid" autocomplete="off" required>
      <label class="serif" for="userpw">Password</label>
      <input class="serif" type="password" name="userpw" bind:value="{pass}" id="userpw" autocomplete="off" required>
      <input type="submit" on:click="{login}" value="로그인">
    </form>
  </section>
</article>

<style>
  form {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  .input_error {
    background-color: crimson;
    display: inline-block;
    margin: 3px;
    padding: 3px 6px;
    border-radius: 3px;
  }

  form input {
    width: 100%;
    text-align: center;
  }

  form input[type="text"],
  form input[type="password"] {
    background-color: black;
    border: 0;
    border-bottom: 1px solid white;
    outline: none;
    color: white;
    font-size: 1.5rem;
  }

  form input[type="submit"] {
    background-color: rgb(255, 31, 98);
    padding: .5rem;
    margin-top: 3rem;
    outline: none;
    color: white;
    border: 0;
  }

  form input[type="submit"]:hover {
    background-color: rgb(255, 87, 137);
    cursor: pointer;
  }

  label {
    margin-left: 5px;
    margin-bottom: 5px;
    margin-top: 1rem;
    font-size: 1.5rem;
  }
</style>