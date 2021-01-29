// Routes
import Blog from './routes/Blog.svelte';
import Home from './routes/Home.svelte';
import Services from './routes/Services.svelte';
import Pricing from './routes/Pricing.svelte';
import Company from './routes/Company.svelte';
import Vacancies from './routes/Vacancies.svelte';
import NotFound from './routes/NotFound.svelte';

const routes = {
    '/': Home,
    '/services': Services,
    '/pricing': Pricing,
    '/company': Company,
    '/blog': Blog,
    '/vacancies': Vacancies,
    '*': NotFound,
}

export default routes;