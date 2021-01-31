<script>
	export let name;
	import Headr from './components/Headr.svelte';
	import Nav from './components/Nav.svelte';
	import Foot from './components/Foot.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes';
</script>

<div class="container bg-default h-full min-h-screen mt-0 md:mx-20">
	<div class="bg-white sticky top-0 h-18 w-full my-6 py-6 z-50">
		<Headr />
		<Nav />
	</div>	
	<main>
		<Router {routes} />
	</main>
	<Foot />
</div>

<style global>
	@import 'tailwindcss/base';
	@import 'tailwindcss/components';
	@import 'tailwindcss/utilities';
</style>