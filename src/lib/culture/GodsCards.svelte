<script>
    import cardBg from "../../assets/culture/cardBg.png";

    export let name;
    export let title;
    export let img;
    export let desc;
</script>

<div
    class="flex bg-contain bg-no-repeat bg-center px-10 py-4 text-white font-khand gap-20"
    style="background-image: url({cardBg}); aspect-ratio:1146/431"
>
    <div
        class="flex-1 bg-[#374736] bg-opacity-50 flex justify-center items-center rounded-3xl"
    >
        <div
            class="aspect-square w-full bg-contain bg-no-repeat bg-center m-16"
            style="background-image: url({img});"
        >
            <div
                class="w-full h-full flex flex-col justify-end items-center p-12 font-marko text-4xl text-center"
            >
                <h1>{name}:</h1>
                <h1>{title}</h1>
            </div>
        </div>
        <!-- <img src={img} alt="" class="w-[22vw]" /> -->
    </div>
    <div class="flex-1 text-2xl my-auto">{desc}</div>
</div>
<!-- <div> -->
<!--     <img src={cardBg} alt="" class="w-full relative" /> -->
<!--     <div>{desc}</div> -->
<!-- </div> -->
