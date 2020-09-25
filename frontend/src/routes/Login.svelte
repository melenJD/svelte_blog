<article> 
  <section>
    <h1 class="title serif">Login</h1>
  </section>
  <section>
    <form>
      <label class="serif" for="userid">Account</label>
      <input class="serif" type="text" name="userid" id="userid" autocomplete="off">
      <label class="serif" for="userpw">Password</label>
      <input class="serif" type="password" name="userpw" id="userpw" autocomplete="off">
      <input type="submit" value="로그인">
    </form>
  </section>
</article>

<style>
  form {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
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