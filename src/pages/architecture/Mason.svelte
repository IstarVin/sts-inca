<script>
    import { onMount } from "svelte";
    import { hideHeader } from "../../stores/header";
    import { Link } from "svelte-routing";
    import { ArrowLeftOutline } from "flowbite-svelte-icons";
    import mason from "../../assets/acrhitecture/mason2.png";
    import arch1 from "../../assets/acrhitecture/arch1.png";
    import arch2 from "../../assets/acrhitecture/arch2.png";
    import arch3 from "../../assets/acrhitecture/arch3.png";
    import arch4 from "../../assets/acrhitecture/arch4.png";
    import youtubeIcon from "../../assets/acrhitecture/youtube.png";

    let images = [arch1, arch2, arch3, arch4];
    onMount(() => {
        $hideHeader = true;
        return () => {
            $hideHeader = false;
        };
    });
</script>

<Link to="/architecture">
    <div class="flex p-4">
        <ArrowLeftOutline />
        <h1 class="uppercase font-bold">Back</h1>
    </div>
</Link>
<div class="mx-10 xl:mx-[10vw] 2xl:mx-[15vw] mb-12 font-roboto">
    <div class="w-full h-16" style="background-color: #E5E7EB;"></div>
    <div class="my-6"></div>
    <div
        class="w-full flex flex-col bg-cover py-4 pb-10 px-16 gap-16"
        style="background-image: url({mason});"
    >
        <div class="flex flex-col mx-auto">
            <h1
                class="uppercase text-7xl text-primary-700 font-familjen font-bold"
                style="letter-spacing: -5px;"
            >
                Master Stone Mason
            </h1>
            <hr class="border-t border-gray-300 my-6 mx-4" />
        </div>
        <div class="flex gap-10">
            <div class="bg-stone-800 w-full"></div>
            <div class="w-[150%]">
                <p class="text-gray-100 text-lg">
                    The <b class="font-extrabold">Incas</b> constructed large
                    buildings, walls and fortifications using finely worked
                    blocks either regular or polygonal which fitted together so
                    precisely no mortar was needed With an emphasis on clean
                    lines, trapezoid shapes, and incorporating natural features
                    into these buildings, they have easily withstood the
                    powerful earthquakes which frequently hit the region.
                    <br />
                    <br />
                    The distinctive sloping trapezoid form and fine masonry of Inca
                    buildings were, besides their obvious aesthetic value, also used
                    as a recognizable symbol of Inca domination throughout the empire
                </p>
                <hr class="border-t border-gray-300 my-6 mx-4" />
            </div>
        </div>
    </div>
    <div class="my-8"></div>
    <div>
        <h1
            class="ml-5 uppercase text-5xl text-primary-600"
            style="letter-spacing: -4px;"
        >
            Inca Qolloa
        </h1>
        <div class="flex mt-5 justify-between">
            {#each images as img}
                <img src={img} alt="" />
            {/each}
        </div>
        <p class="my-6 mx-3 text-lg">
            <b>Inca qollqa, or storehouses</b>, were essential structures used
            for storing grain and other foodstuffs during the 15th and 16th
            centuries CE. These buildings played a crucial role in ensuring food
            security for the Inca Empire, allowing them to manage surpluses and
            sustain their population during times of scarcity, drought, or
            warfare. Strategically located, qollqa were often built in
            high-altitude areas with cooler temperatures, which helped preserve
            the stored food for longer periods. Their design reflected the
            Incas' understanding of their environment and the importance of
            reliable food storage for maintaining social stability and
            supporting their expansive civilization.
            <br />
            <br />
            The <b>qollqa</b> featured small windows and ventilated walls to
            regulate temperature and humidity, ensuring optimal conditions for
            food preservation. At sites like <b>Ollantaytambo</b>, these
            structures demonstrated the Incas' advanced knowledge of resource
            management and architectural techniques. The efficient storage and
            distribution of food not only supported local communities but also
            facilitated trade and tribute systems throughout the empire. This
            strategic approach to food storage played a vital role in the Inca
            Empire's ability to thrive in diverse and challenging landscapes.
        </p>
    </div>
    <hr class="border-t border-gray-300 mt-10 mb-6 mx-4" />
    <div class="flex items-center">
        <div class="w-[130%]">
            <div class="relative ml-20 w-60 h-8 bg-black"></div>
            <div
                class="px-10 py-6 rounded-l-2xl"
                style="background-color: #9D9D9D;"
            >
                <p class="text-white italic font-bold">
                    Watch the attached video titled 'This is How They Built Inca
                    Stone Walls' to gain a deeper understanding of the
                    innovative techniques employed by the Incas in their stone
                    masonry. The video explores the methods used to shape and
                    transport massive stones with precision, highlighting the
                    remarkable craftsmanship that enabled the construction of
                    enduring structures like Machu Picchu. Learn about the tools
                    and processes that contributed to the empire's architectural
                    achievements, offering insights into the incredible skills
                    of Inca builders
                </p>
            </div>
        </div>
        <div class="w-full h-[47vh] flex flex-col gap-3">
            <div
                class="h-full bg-white rounded-md p-1 shadow-gray-300 shadow-md border-gray-300 flex flex-col"
            >
                <iframe
                    src="https://youtube.com/embed/_KbSFphHCZY"
                    frameborder="0"
                    title="This is How They Built the Inca Stone Walls | Ancient Architects"
                    class="w-full aspect-video rounded-md"
                ></iframe>
                <div class="my-auto mx-10">
                    <h1
                        class="text-lg text-ellipsis whitespace-nowrap overflow-hidden w-96"
                    >
                        This is How They Built the Inca Stone Walls | Ancient
                        Architects
                    </h1>
                    <div class="flex gap-2">
                        <img src={youtubeIcon} alt="" class="size-6" />
                        <h1 class="text-gray-600">Youtube</h1>
                    </div>
                </div>
            </div>
            <h1 class="mx-auto text-lg">Courtesy of Ancient Architects</h1>
        </div>
    </div>
    <div class="my-24"></div>
    <div class="flex flex-row-reverse items-center">
        <div class="w-[130%]">
            <div class="relative ml-auto mr-20 w-60 h-8 bg-black"></div>
            <div
                class="px-10 py-6 rounded-r-2xl"
                style="background-color: #9D9D9D;"
            >
                <p class="text-white italic font-bold">
                    Explore the attached video on Machu Picchu, which provides
                    an in-depth look at the site’s remarkable architecture and
                    historical significance. Discover the engineering techniques
                    that allowed the Incas to build this extraordinary fortress
                    high in the Andes, as well as insights into its cultural
                    importance and the mysteries that continue to intrigue
                    researchers today."
                </p>
            </div>
        </div>
        <div class="w-full h-[47vh] flex flex-col gap-3">
            <div
                class="h-full bg-white rounded-md p-1 shadow-gray-300 shadow-md border-gray-300 flex flex-col"
            >
                <iframe
                    src="https://youtube.com/embed/cnMa-Sm9H4k"
                    frameborder="0"
                    title="This is How They Built the Inca Stone Walls | Ancient Architects"
                    class="w-full aspect-video rounded-md"
                ></iframe>
                <div class="my-auto mx-10">
                    <h1
                        class="text-lg text-ellipsis whitespace-nowrap overflow-hidden w-96"
                    >
                        Machu Picchu 101 | National Geographic
                    </h1>
                    <div class="flex gap-2">
                        <img src={youtubeIcon} alt="" class="size-6" />
                        <h1 class="text-gray-600">Youtube</h1>
                    </div>
                </div>
            </div>
            <h1 class="mx-auto text-lg">Courtesy of Natural Geographic</h1>
        </div>
    </div>
</div>
