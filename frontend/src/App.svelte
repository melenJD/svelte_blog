<script>
	import Nav from './components/Nav.svelte';
	import Header from './components/Header.svelte';
	export let name = 'Jidong';

	function ToggleName() {
		if (name === 'Jidong') {
			name = 'World';
		} else {
			name = 'Jidong';
		}
	}
</script>

<Header/>
<Nav/>

<main>
	<p>Hello {name}</p>
	<button on:click="{ToggleName}">
		Change Name
	</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>