<script>
    import { onMount } from "svelte";
    import godsImg from "../../assets/culture/godsimg.png";
    import vira from "../../assets/culture/vira.png";
    import inti from "../../assets/culture/inti.png";
    import mama from "../../assets/culture/mama.png";
    import apu from "../../assets/culture/apu.png";
    import GodsCards from "../../lib/culture/GodsCards.svelte";
    import { headerBg, hideHeader } from "../../stores/header";
    import { Link } from "svelte-routing";
    import { ArrowLeftOutline } from "flowbite-svelte-icons";

    onMount(() => {
        let past = document.body.style.backgroundColor;
        $headerBg = "#DBFDD8";
        document.body.style.backgroundColor = "#DBFDD8";
        return () => {
            document.body.style.backgroundColor = past;
        };
    });

    let gods = [
        {
            name: "Viracocha",
            title: "The Creator God",
            img: vira,
            desc: "Viracocha was the supreme creator in Inca mythology, believed to have shaped the universe, the earth, and all living beings. He was thought to have risen from Lake Titicaca in darkness, bringing light and creating the first generation of humans. Unlike other gods, Viracocha was seen as a more distant, all-encompassing deity, less directly involved in daily affairs but essential to the existence of all things.",
        },
        {
            name: "Inti",
            title: "The Sun God",
            img: inti,
            desc: "Inti was the most important god in everyday life, representing the sun and life-giving power. He was the patron god of the Inca Empire, as they considered themselves descendants of Inti, with the Sapa Inca (the emperor) seen as his direct representative on Earth. Festivals, sacrifices, and offerings were regularly made to Inti to ensure agricultural success, particularly for crops like corn, which was sacred to the Incas.",
        },
        {
            name: "Mama Quilla",
            title: "The Moon Goddess",
            img: mama,
            desc: "Mama Quilla was Inti’s wife and sister, the goddess of the moon and protector of women. She governed the lunar calendar, which was vital for agricultural and ceremonial cycles. As a motherly figure, she was worshipped for her beauty and for providing guidance, especially in relation to time and festivals. Mama Quilla was also revered as the protector of marriage and childbirth.",
        },
        {
            name: "Apu Illapu",
            title: "The Thunder God",
            img: apu,
            desc: "Apu Illapu was the god of rain, lightning, and thunder, crucial for ensuring rain for crops in the often dry Andean environment. He was deeply feared and respected, as drought or floods were devastating for Inca agriculture. During times of drought, special ceremonies and sacrifices, including the offering of animals, were made to Illapu to invoke his favor and bring rain.",
        },
    ];

    onMount(() => {
        $hideHeader = true;
        return () => {
            $hideHeader = false;
        };
    });
</script>

<Link to="/culture" class="z-20 absolute top-0">
    <div class="flex p-4">
        <ArrowLeftOutline />
        <h1 class="uppercase font-bold">Back</h1>
    </div>
</Link>
<img
    src={godsImg}
    alt="art"
    class="w-full h-[100vh] -z-10 absolute top-0 object-cover object-bottom"
/>

<div
    class="w-1/2 h-[100vh] z-10 top-0 bg-black bg-opacity-30 flex flex-col justify-center"
>
    <div class="text-right px-40">
        <h1 class="font-marko text-[#0A4820] text-4xl">
            Divine Guardians of the Inca: <br /> Gods of Nature and Life
        </h1>
        <div class="my-7"></div>
        <h1 class="font-khand text-white text-2xl">
            Discover the Inca’s spiritual world, where gods like Viracocha,
            Inti, and Pacha Mama governed nature and life. Through worship and
            offerings, the Incas maintained harmony with these deities, ensuring
            their empire’s prosperity. Dive into their divine stories and
            influence.
        </h1>
    </div>
</div>
<div class="my-16"></div>
<div
    class="flex flex-col items-center mx-16 xl:mx-[10vw] 2xl:mx-[20vw] font-roboto gap-16"
>
    {#each gods as { name, title, img, desc }}
        <GodsCards {name} {title} {img} {desc} />
    {/each}
</div>

<div class="m-10"></div>
