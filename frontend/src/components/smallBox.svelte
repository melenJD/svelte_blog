<script>
  export let title;
  export let content;
</script>

<div class="smallbox">
  <div class="topline"/>
  <div class="title">
    <p>{title}</p>
  </div>
  <div class="content">
    <p>{content}</p>
  </div>
</div>

<style>
  .smallbox {
    background-color: #181818;
    display: inline-block;
    width: 200px;
    margin: 10px 5px;
    box-sizing: border-box;
    border-radius: 5px;
    position: relative;
    overflow: hidden;
  }

  .smallbox:hover {
    background-color: #383838;
    cursor: pointer;
  }

  .smallbox .topline {
    width: 100%;
    background-color: rgb(255, 31, 98);
    position: relative;
    height: 5px;
  }

  .smallbox .content {
    margin: .5rem;
    text-align: left;
    word-break: break-all;
    font-size: .8rem;
  }

  .smallbox .title {
    margin: .5rem;
    text-align: left;
    font-size: 1.2rem;
    font-weight: 500;
  }
</style>