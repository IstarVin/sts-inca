<script>
    import { headerBg } from "../stores/header";
    import machu from "../assets/acrhitecture/Macchu Pichu Frame.png";
    import mason from "../assets/acrhitecture/mason.png";
    import road from "../assets/acrhitecture/road.png";
    import Frame from "../lib/architecure/Frame.svelte";
    import Footer from "../lib/Footer.svelte";
    import { onMount, onDestroy } from "svelte";
    import { archY } from "../stores/architecture";

    $headerBg = "#FFF4EB";
    onDestroy(() => ($archY = window.scrollY));
    onMount(() => scrollTo(0, $archY));
</script>

<div
    class="flex flex-col items-center mx-16 xl:mx-[10vw] 2xl:mx-[20vw] font-roboto"
>
    <div class="bg-gray-200 w-full h-32 mt-32 mb-16"></div>
    <div class="flex items-center gap-10 h-[60vh]">
        <div class="flex-1 flex flex-col w-[50%]">
            <hr class="border-t border-gray-300 my-6 mx-4" />
            <p class="text-xl">
                Learn about the incredible achievements of the Inca Empire, from
                their sophisticated architecture to their extensive road
                networks. Discover how the Incas constructed
                earthquake-resistant buildings using precise stone masonry,
                creating distinctive trapezoid structures that symbolized their
                power.
                <br />
                <br />
                Explore the purpose of storehouses, the grandeur of Machu Picchu,
                and the interconnected roadways that spanned thousands of miles.
                Uncover the engineering techniques that allowed the Incas to build
                in challenging terrains and establish a thriving civilization across
                the Andes."
            </p>
            <hr class="border-t border-gray-300 my-6 mx-4" />
        </div>
        <img src={machu} alt="" class="flex-1 p-6" />
        <!-- <div class="w-max h-[60vh] bg-[#989694] rounded-[15%]"> -->
        <!-- <div class="relative -top-[25vh] ml-10 flex items-end"> -->
        <!-- <h1 class="text-white text-8xl font-labrada font-bold"> -->
        <!--     Lost City of the Incas -->
        <!-- </h1> -->
        <!-- <Button -->
        <!--     class="w-40 h-10 mb-2 absolute right-0 mr-10 font-abel text-xl" -->
        <!--     pill -->
        <!-- > -->
        <!--     Learn More -->
        <!-- </Button> -->
        <!-- </div> -->
        <!-- </div> -->
    </div>
    <Frame
        name="Master Stone Mason"
        desc="The Incas constructed large buildings, walls and fortifications using finely worked blocks either regular or polygonal which fitted together so precisely no mortar was needed..."
        bgImg={mason}
        to="/mason"
    />
    <div class="my-10"></div>
    <Frame
        name="Inca Road System"
        desc="The Inca road system connected cities and temples across thousands of miles, enabling the civilization to thrive in the Andes—an engineering marvel achieved without the wheel or modern tools...."
        bgImg={road}
        to="/"
        reverse
    />
    <div class="my-10"></div>
</div>

<Footer
    bgColor="#2D2C2C"
    textColor="#8E8E8E"
    color1="#4C4C4C"
    color2="#5F5F5F"
    color3="#A9A9A9"
/>
