<script>
    import { Link } from "svelte-routing";
    import sun from "../assets/sun.svg";
    let routes = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "-image-", href: "/" },
        { name: "History", href: "/history" },
        { name: "Culture", href: "/culture" },
    ];
</script>

<nav class="fixed w-full h-24 flex justify-center items-center">
    {#each routes as route}
        {#if route.name != "-image-"}
            <Link to={route.href} class="text-lg mx-7 curafthov:text-sky-500">
                {route.name}
            </Link>
        {:else}
            <Link to={route.href}>
                <img src={sun} alt="sun" class="size-20 mx-10" />
            </Link>
        {/if}
    {/each}
</nav>
