<script>
    import { Link } from "svelte-routing";
    import sun from "../assets/sun.svg";
    let routes = [
        { name: "Architecture", href: "/architecture" },
        { name: "Culture", href: "/culture" },
        { name: "-image-", href: "/" },
        { name: "Government", href: "/government" },
        { name: "History", href: "/history" },
    ];
</script>

<nav
    class="fixed top-0 w-full h-24 mt-2 flex justify-center items-center font-medium z-50"
>
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
