<script>
    import { Link } from "svelte-routing";
    let routes = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "History", href: "/history" },
        { name: "Culture", href: "/culture" },
    ];
</script>

<nav class="flex justify-center">
    {#each routes as route}
        <Link to={route.href} class="text-lg m-5 curafthov:text-sky-500">
            {route.name}
        </Link>
    {/each}
</nav>
