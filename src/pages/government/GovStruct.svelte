<script>
    import { onMount } from "svelte";
    import Structure from "../../lib/government/Structure.svelte";
    import { hideHeader } from "../../stores/header";
    import { Link } from "svelte-routing";
    import { ArrowLeftOutline } from "flowbite-svelte-icons";

    onMount(() => {
        $hideHeader = true;
        return () => {
            $hideHeader = false;
        };
    });
</script>

<Link to="/government" class="z-20 absolute top-0">
    <div class="flex p-4">
        <ArrowLeftOutline />
        <h1 class="uppercase font-bold">Back</h1>
    </div>
</Link>
<div
    class="flex flex-col items-center my-0 justify-around font-roboto bg-gradient-to-b to-gray-300 from-gray-500 p-10"
>
    <h1 class="font-labrada text-5xl text-white">Government Organization</h1>
    <p class="text-[#D6D3D3] text-2xl mt-1">
        called the Tawantinsuyu. It was a monarchy ruled by a single leader
        called the Sapa Inca.
    </p>
    <div class="my-5"></div>
    <Structure />
</div>
