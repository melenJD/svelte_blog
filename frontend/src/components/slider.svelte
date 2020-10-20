<script>
    import SliderItem from './sliderItem.svelte';
    import Carousel from '@beyonk/svelte-carousel';
    import { link } from 'svelte-spa-router';

    let items = [];

    fetch('http://localhost/post/slide', {
        method: 'POST'
    }).then(function(response) {
        return response.json();
    }).then(function(json) {
        items = json.data;
    })
</script>

<div class="slider">
    <Carousel perPage={1} autoplay={0} duration={1000}>
        <a href="/post/27" use:link><SliderItem image_link={'../images/slider01.jpg'} title={items.title} content={items.content}/></a>
    </Carousel>
</div>

<style>
    .slider {
        position: relative;
        width: 60%;
        height: 250px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 5px;
        background-color: #111;
        overflow: hidden;
    }

    @media screen and (max-width: 768px) {
        .slider {
            width: 100%;
        }
    }
</style>