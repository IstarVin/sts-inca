<script>
    export let name = "Sapa Inca";
    export let img;
    export let desc = "lasdfas";

    let clicked = false;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    class="w-[25vw] aspect-video rounded-3xl bg-contain bg-no-repeat bg-center hover:cursor-pointer overflow-hidden font-labrada"
    style="background-image: url({img});"
    on:mouseenter={() => (clicked = true)}
    on:mouseleave={() => (clicked = false)}
>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        class="bg-gray-500 bg-opacity-30 w-full h-full flex items-center transition duration-500 justify-center ease-in-out text-gray-100 text-4xl"
        style={clicked
            ? "transform: translateY(-100%)"
            : "transform: translateY(0)"}
    >
        {name}
    </div>
    <div
        class="w-full h-full bg-black bg-opacity-15 transition duration-500 flex items-center justify-center text-white px-16 text-2xl"
        style={clicked
            ? "transform: translateY(-100%)"
            : "transform: translateY(0)"}
    >
        {desc}
    </div>
</div>
