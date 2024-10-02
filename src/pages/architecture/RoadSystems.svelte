<script>
    import { onMount } from "svelte";
    import roadBg from "../../assets/acrhitecture/roadBg.png";
    import incaRoads from "../../assets/acrhitecture/incaRoads.png";
    import andes from "../../assets/acrhitecture/andes.png";
    import bridge from "../../assets/acrhitecture/bridge.png";
    import { hideHeader, textColor } from "../../stores/header";
    import { Link } from "svelte-routing";
    import { ArrowLeftOutline } from "flowbite-svelte-icons";
    import Footer from "../../lib/Footer.svelte";

    import road1 from "../../assets/acrhitecture/road1.png";
    import road2 from "../../assets/acrhitecture/road2.png";
    import road3 from "../../assets/acrhitecture/road3.png";
    import road4 from "../../assets/acrhitecture/road4.png";

    let images = [road1, road2, road3, road4];

    onMount(() => {
        $textColor = "#F1F1F1";
        $hideHeader = true;
        return () => {
            $textColor = "#000000";
            $hideHeader = false;
        };
    });
</script>

<Link to="/architecture" class="z-30 absolute top-0 text-gray-300">
    <div class="flex p-4">
        <ArrowLeftOutline />
        <h1 class="uppercase font-bold">Back</h1>
    </div>
</Link>
<img
    src={roadBg}
    alt="art"
    class="w-full h-[100vh] top-0 absolute object-cover object-bottom -z-20"
/>
<div
    class="w-full h-[100vh] bg-black bg-opacity-45 -z-20"
    style="clip-path: polygon(0 0, 100% 0, 0 100%);"
></div>
<div class="w-full h-full absolute top-0 flex justify-center items-center">
    <h1 class="font-labrada text-white text-9xl font-bold">
        Inca Road Systems
    </h1>
</div>

<div
    class="mx-10 xl:mx-[10vw] 2xl:mx-[15vw] mb-12 px-10 font-roboto flex flex-col items-center"
>
    <hr class="border-t border-gray-300 my-6" />
    <div class="flex items-center gap-5">
        <img src={incaRoads} alt="" class="" />
        <p class="text-xl font-light">
            The Inca Empire was interconnected by an extensive road system
            spanning 25,000 miles, allowing communication between distant points
            to occur within days. Messengers, who lived in pairs, were tasked
            with receiving and delivering messages. While one messenger slept,
            the other remained on standby to fulfill their duty.
            <br />
            <br />
            This efficient road network and messenger system enabled the king to
            quickly send orders to mobilize an army for defense, with men from various
            communities responding promptly. Along the roads, there were stations,
            inns, and storage depots that provided support to troops, offered rest
            for travelers, and sustained those working for the messenger service.
        </p>
    </div>
    <img src={andes} alt="" class="w-full my-14" />
    <div class="flex items-center gap-10">
        <div>
            <hr class="border-t border-gray-300 my-4" />
            <p class="text-xl font-light px-3">
                The <b class="italic font-extrabold">Q'eswachaka bridge</b> is
                an Inca suspension bridge made entirely of woven grass called
                ichu, spanning the Apurimac River near Huinchiri, Peru.
                Measuring approximately 118 feet (36 meters) in length, it is
                reconstructed every year by the local communities, maintaining
                an ancient tradition that has been passed down through
                generations. The rebuilding involves a communal effort where
                hundreds of villagers gather to harvest the ichu grass, weave it
                into thick ropes, and reassemble the bridge. This process is
                accompanied by ceremonies and offerings to
                <b class="italic font-extrabold">Pachamama</b>, or Mother Earth,
                reflecting the cultural and spiritual importance of the bridge
                to the local people.
            </p>
        </div>
        <img src={bridge} alt="" />
    </div>
    <p class="text-xl font-light px-3">
        Historically, the Q'eswachaka bridge was part of the Inca Empire's vast
        road network, known as the <b class="font-extrabold">Qhapaq Ñan</b>,
        which stretched over 25,000 miles and allowed efficient communication,
        trade, and military mobilization throughout the empire. The bridge's
        catenary design—a natural curve formed under its own weight—helped
        distribute the tension evenly, ensuring stability and safety in the
        challenging Andean terrain. Its construction technique highlights the
        ingenuity of the Inca, who adapted their engineering skills to create
        practical and effective solutions for traversing the rugged landscapes
        of the Andes Mountains.
        <br />
        <br />
        Today, the <b class="font-extrabold">Q'eswachaka bridge</b> stands as the
        last existing traditional Inca suspension bridge, symbolizing the resilience
        of cultural heritage in a modern world. It serves not only as a functional
        crossing for local villagers but also as a living testament to Inca engineering
        skills and communal values. The annual rebuilding ritual has gained attention
        from travelers and historians alike, showcasing the continued connection
        between the past and present through an enduring practice of craftsmanship
        and community solidarity.
    </p>
    <hr class="border-t border-gray-300 my-8 w-3/4" />
    <div class="flex justify-between w-full">
        {#each images as img}
            <img src={img} alt="" class="w-[15vw] min-w-[210px]" />
        {/each}
    </div>
    <hr class="border-t border-gray-300 mt-8 w-3/4" />
</div>
