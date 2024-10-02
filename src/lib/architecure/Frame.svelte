<script>
    import { Button } from "flowbite-svelte";
    import { Link } from "svelte-routing";

    export let name;
    export let desc;
    export let bgImg;
    export let to;
    export let reverse = false;
</script>

<div style="background-image: url({bgImg});" class="bg-cover w-full">
    <div
        class="w-1/2 flex flex-col bg-black bg-opacity-40 gap-[7vh] text-white p-10
        {reverse ? 'ml-auto items-end text-end' : ''}"
    >
        <h1
            class="uppercase text-6xl font-familjen"
            style="letter-spacing: -5px;"
        >
            {name}
        </h1>
        <p class="ml-4 text-xl text-gray-200 leading-relaxed">
            {desc}
        </p>
        <Link {to} class={reverse ? "mr-auto" : "ml-auto"}>
            <Button pill class="font-abel w-40 text-base">Learn More</Button>
        </Link>
    </div>
</div>
