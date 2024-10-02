<script>
    import Slideshow from "../lib/home/Slideshow.svelte";
    import bg from "../assets/home/bg.jpg";
    import { Button } from "flowbite-svelte";
    import Footer from "../lib/Footer.svelte";
    import { headerBg } from "../stores/header";
    function scrollToBottom() {
        window.scrollTo({
            top: window.innerHeight, // 100% of viewport height
            behavior: "smooth", // Smooth scroll effect
        });
    }
    $headerBg = "#FFF4EB";
</script>

<div>
    <img
        src={bg}
        alt="bg"
        class="w-full h-[100vh] object-cover object-center"
    />
    <div class="absolute top-72 right-28 h-1/3 w-[40vw] z-0">
        <h1 class="text-8xl text-primary-50">Inca Civilization</h1>
        <p class="mt-1 text-gray-100 text-lg">
            The Inca civilization thrived in ancient Peru from around 1400 to
            1533 CE, expanding their empire across western South America from
            Quito in the north to Santiago in the south, making it the largest
            empire in the Americas and the world at that time.
        </p>
        <div class="flex justify-center">
            <Button on:click={scrollToBottom} class="mt-7">Learn More</Button>
        </div>
    </div>
    <Slideshow />
</div>

<Footer
    textColor={"#F8C09E"}
    bgColor={"#FF914D"}
    color1={"#FFB375"}
    color2={"#D77A3A"}
    color3={"#FF7A29"}
/>
