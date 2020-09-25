<script>
    import SliderItem from './sliderItem.svelte';
    import Carousel from '@beyonk/svelte-carousel';
</script>

<div class="slider">
    <Carousel perPage={1} autoplay={10000} duration={1000}>
        <SliderItem/>
        <SliderItem/>
        <SliderItem/>
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
</style>