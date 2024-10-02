<script>
    import { Link } from "svelte-routing";
    import { onMount } from "svelte";
    import sun from "../assets/sun.svg";
    import { headerBg, hideHeader } from "../stores/header";
    import a from "../assets/background/a.svg";
    import b from "../assets/background/b.svg";

    let routes = [
        { name: "Architecture", href: "/architecture" },
        { name: "Culture", href: "/culture" },
        { name: "-image-", href: "/" },
        { name: "Government", href: "/government" },
        { name: "History", href: "/history" },
    ];
    let isScrolled = false;

    const handleScroll = () => {
        isScrolled = window.scrollY > 0; // Change to true if scrolled down
    };

    // Attach the scroll event listener
    onMount(() => {
        window.addEventListener("scroll", handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<nav
    class="fixed top-0 w-full h-24 flex justify-center items-center font-medium z-50 transition-colors duration-500 ease-in-out
    {$hideHeader ? 'hidden' : ''}"
    style="background-color: {isScrolled ? $headerBg : ''};"
>
    <!-- <img src={a} alt="a" class="absolute top-0 right-0 -z-40" /> -->
    <!-- <img src={b} alt="b" class="absolute top-0 left-0 m-2 -z-40" /> -->
    {#each routes as route}
        {#if route.name != "-image-"}
            <Link
                to={route.href}
                class="text-lg mx-7 curafthov:text-primary-600"
            >
                {route.name}
            </Link>
        {:else}
            <Link to={route.href}>
                <img src={sun} alt="sun" class="size-20 mx-10" />
            </Link>
        {/if}
    {/each}
</nav>
