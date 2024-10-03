<script>
    import Slideshow from "../lib/home/Slideshow.svelte";
    import bg from "../assets/home/bg.jpg";
    import about from "../assets/home/About Title.png";
    import {
        Accordion,
        AccordionItem,
        Button,
        Card,
        Carousel,
    } from "flowbite-svelte";
    import Footer from "../lib/Footer.svelte";
    import { headerBg } from "../stores/header";
    import image1 from "../assets/home/Image 1.png";
    import image2 from "../assets/home/Image 2.png";
    import image3 from "../assets/home/Image 3.png";
    import textile1 from "../assets/home/textile1.png";
    import textile2 from "../assets/home/textile2.png";
    import textile3 from "../assets/home/textile3.png";
    function scrollToBottom() {
        window.scrollTo({
            top: window.innerHeight - 96, // 100% of viewport height
            behavior: "smooth", // Smooth scroll effect
        });
    }
    $headerBg = "#FFF4EB";

    let ceramicImages = [
        {
            alt: "urpu",
            src: image1,
            title: "Urpu",
        },
        {
            alt: "qeros",
            src: image2,
            title: "Qeros",
        },
        {
            alt: "pacchas",
            src: image3,
            title: "Pacchas",
        },
    ];
    let metalworkImages = [
        {
            alt: "urpu",
            src: image1,
            title: "Urpu",
        },
        {
            alt: "qeros",
            src: image2,
            title: "Qeros",
        },
        {
            alt: "pacchas",
            src: image3,
            title: "Pacchas",
        },
    ];
    let textileImages = [
        {
            alt: "urpu",
            src: textile1,
            title: "Urpu",
        },
        {
            alt: "qeros",
            src: textile2,
            title: "Qeros",
        },
        {
            alt: "pacchas",
            src: textile3,
            title: "Pacchas",
        },
    ];

    let images = ceramicImages;

    let ceramicOpen = true;
    let metalworkOpen = false;
    let textilesOpen = false;

    function changeItem() {
        if (ceramicOpen) {
            images = ceramicImages;
        }
        if (metalworkOpen) {
            images = metalworkImages;
        }
        if (textilesOpen) {
            images = textileImages;
        }
    }
</script>

<img src={bg} alt="bg" class="w-full h-[100vh] object-cover object-center" />
<div class="absolute top-72 right-28 h-1/3 w-[40vw] z-0">
    <h1 class="text-8xl text-primary-50">Inca Civilization</h1>
    <p class="mt-1 text-gray-100 text-lg">
        The Inca civilization thrived in ancient Peru from around 1400 to 1533
        CE, expanding their empire across western South America from Quito in
        the north to Santiago in the south, making it the largest empire in the
        Americas and the world at that time.
    </p>
    <div class="flex justify-center">
        <Button on:click={scrollToBottom} class="mt-7">Learn More</Button>
    </div>
</div>
<div class="flex flex-col gap-10 my-10 mx-10 xl:mx-[10vw] 2xl:mx-[15vw]">
    <img src={about} alt="" />
    <div class="flex w-full justify-around text-xl">
        <Card class="bg-primary-50 justify-center">
            <p>
                The Inca civilization thrived in ancient Peru from around 1400
                to 1533 CE, expanding their empire across western South America
                from Quito in the north to Santiago in the south, making it the
                largest empire in the Americas and the world at that time. The
                Incas subjugated diverse populations and utilized various
                landscapes, including plains, mountains, deserts, and tropical
                jungles.
            </p>
        </Card>
        <Card class="justify-center bg-primary-50">
            <p>
                Renowned for their distinctive art and architecture, they built
                finely crafted and monumental structures in the territories they
                conquered. Their remarkable adaptation of natural landscapes
                with terraces, highways, and mountaintop settlements continues
                to astonish modern visitors at iconic sites like Machu Picchu.
            </p>
        </Card>
    </div>
    <hr class="border-t border-primary-700 my-10" />
    <div class="text-black">
        <h1 class="text-6xl font-labrada" style="letter-spacing: -4px;">
            The Art of Incas
        </h1>
        <div class="bg-primary-100 m-16 rounded-xl">
            <div class="flex p-10 font-familjen text-2xl">
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <!-- svelte-ignore a11y-no-static-element-interactions -->
                <div class="w-3/4" on:click={changeItem}>
                    <Accordion flush>
                        <AccordionItem
                            bind:open={ceramicOpen}
                            classActive="bg-inherit"
                            inactiveClass="hover:bg-inherit"
                        >
                            <span slot="header">Ceramics</span>
                            <p>
                                Inca pottery was crafted using natural clay with
                                added materials like mica and sand to prevent
                                cracking during firing.
                            </p>
                        </AccordionItem>
                        <AccordionItem
                            bind:open={metalworkOpen}
                            classActive="bg-inherit"
                            inactiveClass="hover:bg-inherit"
                        >
                            <span slot="header">Metalworks</span>
                            <p>
                                Inca metalwork, reserved for nobles, used gold,
                                silver, copper in objects like jewelry,
                                ceremonial knives, and figurines.
                            </p>
                        </AccordionItem>
                        <AccordionItem
                            bind:open={textilesOpen}
                            classActive="bg-inherit"
                            inactiveClass="hover:bg-inherit"
                        >
                            <span slot="header">Textiles</span>
                            <p>
                                Inca textiles, preserved in the Andean
                                highlands, symbolized wealth, status, and were
                                more prized than gold or silver.
                            </p>
                        </AccordionItem>
                    </Accordion>
                </div>
                <div class="w-1/2">
                    <Carousel {images} let:Controls duration={3000}>
                        <Controls />
                    </Carousel>
                </div>
                <!-- </div> -->
            </div>
        </div>
    </div>
</div>
<div class="pt-12 pb-20 bg-primary-300 select-none drag-none">
    <h1
        class="text-white font-labrada text-7xl ml-10 mb-10"
        style="letter-spacing: -5px;"
    >
        Explore the Inca Civilization
    </h1>
    <Slideshow />
</div>
<!-- <div class="my-20"></div> -->

<hr class="border-t border-primary-700 my-10 mx-10" />
<Footer
    textColor={"#F8C09E"}
    bgColor={"#FF914D"}
    color1={"#FFB375"}
    color2={"#D77A3A"}
    color3={"#FF7A29"}
/>
