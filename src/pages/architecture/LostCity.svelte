<script>
    import { onMount } from "svelte";
    import { hideHeader } from "../../stores/header";
    import { Link } from "svelte-routing";
    import { ArrowLeftOutline } from "flowbite-svelte-icons";
    import lostCity from "../../assets/acrhitecture/lost-city-bg.png";

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

<img
    src={lostCity}
    alt="lostCity"
    class="absolute top-0 object-cover w-full h-[100vh] -z-20"
/>
<div class="absolute w-full h-[100vh] top-0 bg-black bg-opacity-50 -z-10"></div>

<div class="text-white text-bold font-roboto w-full">
    <div class="flex flex-col px-20 gap-8 w-full">
        <div
            class="w-[70vw] bg-black mx-20 bg-opacity-50 px-10 pt-6 pb-10 rounded-2xl"
        >
            <h1
                class="text-primary-600 font-bold font-labrada text-6xl"
                style="letter-spacing: -6px;"
            >
                Architectural Ingenuity and Engineering Excellence:
            </h1>
            <p class="text-lg mt-5 ml-12">
                Machu Picchu exemplifies the advanced engineering techniques of
                the Incas, showcasing their ability to construct intricate stone
                structures that harmonize with the rugged Andean landscape. The
                use of precisely cut stones in an ashlar masonry style allowed
                the buildings to withstand seismic activity, while the
                construction of agricultural terraces demonstrated innovative
                methods for farming in challenging terrains. These architectural
                features not only reflect the Incas' ingenuity but also their
                deep understanding of the environment.
            </p>
        </div>
        <div
            class="w-[70vw] bg-black ml-auto mx-20 bg-opacity-50 px-10 pt-6 pb-10 rounded-2xl"
        >
            <h1
                class="text-primary-600 font-bold font-labrada text-6xl text-end"
                style="letter-spacing: -6px;"
            >
                Cultural and Historical Significance:
            </h1>
            <p class="text-lg mt-5 ml-12">
                Machu Picchu offers valuable insights into Inca society,
                culture, and spirituality. The site's layout, with its temples,
                residential areas, and agricultural fields, highlights the
                complex social structure and lifestyle of the Incas. Today, it
                stands as a UNESCO World Heritage Site and a symbol of Inca
                civilization, drawing thousands of visitors who seek to connect
                with its rich history and breathtaking natural beauty. The
                enduring mystery of its purpose adds to its allure, making it a
                focal point for both archaeological study and tourism.
            </p>
        </div>
        <div
            class="text-[9rem] font-labrada font-bold w-1/2 hidden 3xl:inline"
            style="letter-spacing: -4px; line-height: 8.4rem;"
        >
            Lost City of the Incas
        </div>
    </div>
</div>
