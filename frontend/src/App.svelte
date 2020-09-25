<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Nav from './components/Nav.svelte';
	import Header from './components/Header.svelte';
</script>

<Header/>
<Nav/>
<Router {routes}/>

<style>
	:global(section > h1.title) {
		font-size: 6rem;
		letter-spacing: -2px;
		text-shadow: -5px 0px 0px rgb(18, 21, 211),
					5px 0px 0px rgb(211, 18, 121);
	}

	:global(nav a) {
		padding: .2rem .8rem;
		border-radius: 3px;
		margin: 0 .2rem;
		background-color: rgb(44, 44, 44);
	}

	:global(nav a.active) {
		background-color: rgb(255, 31, 98);
	}

	:global(.serif) {
		font-family: 'Dancing Script', 'YiSunShinRegular', serif;
	}
</style>