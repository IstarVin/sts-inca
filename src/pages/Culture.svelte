<script>
    import image from "../assets/culture/image.png";
    import culture from "../assets/culture/Culture.png";
    import { headerBg } from "../stores/header";
    import { onDestroy, onMount } from "svelte";
    import Carousel from "svelte-carousel/src/components/Carousel/Carousel.svelte";
    import { Button } from "flowbite-svelte";
    import { Link } from "svelte-routing";

    $headerBg = "#DBFDD8";
    onMount(() => {
        let past = document.body.style.backgroundColor;
        document.body.style.backgroundColor = "#DBFDD8";
        return () => {
            document.body.style.backgroundColor = past;
        };
    });

    let cards = [
        {
            desc: "Uncover the Inca's divine world, where Viracocha the creator, Inti the sun god, and Pacha Mama, the Earth Mother, shaped life. Gods of thunder, the moon, and more ruled their universe, blending nature with the sacred.",
            to: "/",
        },
        {
            desc: "The Inca believed humans shared the world with gods, ancestors, and nature's spirits. To thrive, they offered gifts like food and beer to maintain harmony. Their religion emphasized living in balance with nature and Pachamama, the Earth Mother.",
            to: "/",
        },
        {
            desc: "Inca priests used divination to heal, solve crimes, and predict war, often with animal sacrifices. Mummified emperors, revered as sacred, were honored in ceremonies alongside their treasures of gold and silver.",
            to: "/",
        },
        {
            desc: "The Incas mastered agriculture, cultivating crops like corn, potatoes, and quinoa on terraced mountainsides. They relied on intricate irrigation systems and stored surplus food to ensure stability, making their empire thrive in the harsh Andean environment.",
            to: "/",
        },
    ];
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let screeRatio = screenHeight / screenWidth;

    const marginRatio = 0.627;
    let margingHeight;

    function update() {
        margingHeight = screenWidth * marginRatio - screenHeight;
    }

    // Function to check screen width and update message
    function checkResolution() {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        screeRatio = screenHeight / screenWidth;

        update();
    }

    // Add event listener to check resolution on window resize
    window.addEventListener("resize", checkResolution);

    // Call the function initially to set the message on load
    checkResolution();

    // Cleanup the event listener when component is destroyed
    onDestroy(() => {
        window.removeEventListener("resize", checkResolution);
    });

    onMount(update);
</script>

<img src={culture} class="w-full absolute -z-10" alt="" />
<!-- <img -->
<!--     src={image} -->
<!--     alt="lostCity" -->
<!--     class="absolute top-0 object-cover object-bottom w-full h-[100vh] -z-20" -->
<!-- /> -->
<!-- <div -->
<!--     class="absolute w-full h-[100vh] top-0 bg-[#DBFDD8] bg-opacity-50 -z-10" -->
<!-- ></div> -->
<div
    class="w-full h-[100vh] flex items-center justify-center font-marko text-[#0A4820]"
>
    <h1 class="text-center text-6xl">
        The Spirit of the Incas: <br />
        A Journey Through Their Culture
    </h1>
</div>
<div class="" style="margin-top: {margingHeight}px;"></div>

<div
    class="flex flex-col items-center gap-[11.75vw] mx-[10vw] font-khand text-[2.3vw] text-[#33814F] par"
>
    <div class="ml-auto text-right" style="width: 68%;">
        <p class="">{cards[0].desc}</p>
        <Link to={cards[0].to}>
            <Button
                class="bg-[#A1EF7A] hover:bg-green-400 text-[#33814F] text-[1.5vw] rounded-full px-14 py-3 w-min ml-auto text-nowrap"
                >Learn More</Button
            >
        </Link>
    </div>
    <div class="ml-auto text-right">
        <p>{cards[1].desc}</p>
        <Link to={cards[1].to}>
            <Button
                class="bg-[#A1EF7A] hover:bg-green-400 text-[#33814F] text-[1.5vw] rounded-full px-14 py-3 w-min ml-auto text-nowrap"
                >Learn More</Button
            >
        </Link>
    </div>
    <div class="mr-auto text-[#DBFDD8]">
        <p>{cards[2].desc}</p>
        <Link to={cards[2].to}>
            <Button
                class="bg-[#A1EF7A] hover:bg-green-400 text-[#33814F] text-[1.5vw] rounded-full px-14 py-3 w-min ml-auto text-nowrap"
                >Learn More</Button
            >
        </Link>
    </div>
    <div class="mr-auto text-[#DBFDD8]" style="width: 66%;">
        <p>{cards[3].desc}</p>
        <Link to={cards[3].to}>
            <Button
                class="bg-[#A1EF7A] hover:bg-green-400 text-[#33814F] text-[1.5vw] rounded-full px-14 py-3 w-min ml-auto text-nowrap"
                >Learn More</Button
            >
        </Link>
    </div>
</div>

<style>
    .par > div {
        padding: 2.5vw 3vw;
        width: 50%;
        height: 34.5vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
</style>
