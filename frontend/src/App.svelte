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
</style>