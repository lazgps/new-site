<script>
    import {link, push, pop} from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
</script>

<style>
</style>

<nav class="flex flex-row justify-between item-center md:mt-2 text-gray-500">
    <ul class="inline-flex flex-row">
        <li class="hover:text-gray-800">
            <a class="" href="/services" use:link use:active>
                <p class="">Services</p>
            </a>
        </li>
        <li class="hover:text-gray-800 md:pl-4">
            <a href="/pricing" use:link use:active>
                <p>Pricing</p>
            </a>
        </li>
        <li class="hover:text-gray-800 md:pl-4">
            <a href="/company" use:link use:active>
                <p>Company</p>
            </a>
        </li>
        <li class="hover:text-gray-800 md:pl-4">
            <a href="/blog" use:link use:active>
                <p>Blog</p>
            </a>
        </li>
        <li class="hover:text-gray-800 md:pl-4">
            <a href="/vacancies" use:link use:active>
                <p>Vacancies</p>
            </a>
        </li>
    </ul>
    <ul class="inline-flex flex-row ">
        <li class="hover:text-gray-800">
            <p>Sign in</p>
        </li>
    </ul>
</nav>


