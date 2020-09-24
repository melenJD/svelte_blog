<article> 
  <section>
    <div class="container">
      <h1 class="title">Login</h1>
    </div>
    <div class="container">
      <form>
        <label for="userid">Account</label>
        <input type="text" name="userid" id="userid">
        <label for="userpw">Password</label>
        <input type="password" name="userpw" id="userpw">
        <input type="submit" value="로그인">
      </form>
    </div>
  </section>
</article>

<style>
  :global(.container h1.title) {
    font-size: 6rem;
    letter-spacing: -2px;
    text-shadow: -5px 0px 0px rgb(18, 21, 211),
                  5px 0px 0px rgb(211, 18, 121);
    font-family: 'Dancing Script';
  }

  form {
    width: 300px;
    margin-left: auto;
    margin-right: auto;
  }

  form input {
    width: 100%;
    text-align: center;
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
    font-weight: 100;
    margin-left: 5px;
    margin-bottom: 5px;
    margin-top: 1rem;
    letter-spacing: 5px;
  }
</style>