<script>
  export let image_link;
</script>

<div class="slider-item">
  <div class="slider-image" style="background-image: url('{image_link}')"></div>
  <div class="slider-background" />
  <div class="slider-content">
    <p class="title serif">Hi 안녕</p>
    <p class="content">안녕하세요</p>
  </div>
</div>

<style>
  .slider-item {
    position: relative;
    width: 100%;
    height: 250px;
  }

  .slider-item .slider-image {
    width: 55%;
    height: 100%;
    background-size: cover;
  }

  .slider-background {
    position: absolute;
    top: 0px;
    right: 0px;
    width: 45%;
    height: 0px;
    border-left: 100px solid transparent;
    border-bottom: 250px solid #111;
  }

  .slider-content {
    position: absolute;
    width: 45%;
    height: 100%;
    top: 0px;
    right: 0px;
    box-sizing: border-box;
    padding: 1rem 0;
    padding-right: 2rem;
    text-align: right;
  }

  .slider-content .title {
    font-size: 2rem;
  }

  .slider-content .content {
    font-size: .8rem;
    margin-top: 1rem;
  }
</style>