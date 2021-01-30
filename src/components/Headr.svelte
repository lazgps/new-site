<script>
    import {link, push, pop} from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
</script>

<style>
</style>

<header>
    <div class="flex flex-row items-center justify-between">
        <a href="/" use:link use:active>
            <img class="-ml-3" src="assets/logos/logo.png" alt="Our Logo">
        </a>
        <h3 class="font-bold">407.715.2652</h3>
    </div>
</header>
