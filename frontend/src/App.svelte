<script>
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Nav from './components/Nav.svelte';
	import Header from './components/Header.svelte';
	import LoadingPage from './components/LoadingPage.svelte';
	import ErrorPage from './components/ErrorPage.svelte';
	import Footer from './components/Footer.svelte';

	import { showLoadingPage, errorPage } from '../store.js';
</script>

{#if $showLoadingPage}
	<LoadingPage/>
{/if}
{#if $errorPage}
	<ErrorPage/>
{/if}

<div class="content" class:scrolllock={$showLoadingPage || $errorPage}>
	<Header/>
	<Nav/>
	<Router {routes}/>
	<Footer/>
</div>

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

	:global(nav a:hover) {
		box-shadow: 0 0 0 1px rgb(255, 31, 98) inset;
	}

	:global(.serif) {
		font-family: 'Dancing Script', 'Nanum Pen Script', serif;
		font-weight: 400;
	}

	:global(.scrolllock) {
		overflow: hidden;
		width: 100%;
		height: 100%;
	}
</style>