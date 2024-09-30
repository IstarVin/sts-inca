<script>
    import { Link } from "svelte-routing";
    export let name;
    export let image;
</script>

<div class="py-7">
    <div
        class="mx-3 h-full transition-all duration-200 grid grid-flow-row bg-secondary select-none"
    >
        <img
            src={image}
            alt={name}
            class="object-cover w-full rounded drag-none"
        />
        <div class="flex flex-col items-center gap-y-3 my-2">
            <div class="h-fit font-bold text-primary">
                {name}
            </div>
            <Link
                to="/"
                class="bg-primary text-white rounded-full py-2 px-6 drag-none"
                >Learn More</Link
            >
        </div>
    </div>
</div>
