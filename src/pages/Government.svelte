<script>
    import { onDestroy, onMount } from "svelte";
    import bg from "../assets/government/bg.png";
    import quipo from "../assets/government/quipo.png";
    import socialStructure from "../assets/government/social structure.png";
    import { headerBg, textColor } from "../stores/header";
    import { Link } from "svelte-routing";
    import { Button } from "flowbite-svelte";
    import { governmentY } from "../stores/government";
    import Footer from "../lib/Footer.svelte";

    onMount(() => {
        $headerBg = "#F1F1F1";
        $textColor = "#F1F1F1";
        return () => {
            $textColor = "#000000";
        };
    });
    onDestroy(() => ($governmentY = window.scrollY));
    onMount(() => scrollTo(0, $governmentY));
</script>

<img
    src={bg}
    alt="art"
    class="w-full -z-20 absolute top-0 h-[100vh] object-cover object-bottom"
/>

<div class="w-full h-[100vh] flex flex-col gap-10 items-center justify-center">
    <Link to="/structure">
        <h1 class="text-white font-labrada text-9xl font-bold">
            Inca Government
        </h1>
    </Link>
</div>
<div
    class="bg-[#675454] text-xl font-light text-white font-roboto p-10 rounded-2xl absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] mb-10 bg-opacity-70"
>
    <p>
        <b>The Inca Tax:</b> <br /> For taxation purposes, the Incas conducted
        censuses and organized the population into groups based on multiples of
        ten. Their mathematical system was very similar to the one we use today.
        <br />
        Since there was no currency in the Inca Empire, taxes were paid in kind,
        usually in the form of foodstuffs, precious metals, textiles, exotic feathers,
        dyes, and spondylus shells. Additionally, laborers were also considered a
        form of tax payment.<br />These laborers could be relocated across the
        empire to work on projects where they were most  needed, a system known
        as mit'a service.
    </p>
</div>

<div
    class="flex flex-col items-center mx-16 xl:mx-[10vw] 2xl:mx-[20vw] font-roboto"
>
    <div class="flex">
        <div
            class="flex flex-col px-7 py-4 font-marko justify-around bg-[#D6D3D3]"
        >
            <h1 class="text-8xl font-bold">Quipo</h1>
            <h3 class="font-bold">
                (Quipu are recording devices fashioned from strings historically
                used by the Inca)
            </h3>
            <p class="font-light">
                An ancient Inca device for recording information, consisting of
                variously colored threads knotted in different ways.
            </p>
            <p class="font-light">
                To keep track of all these statistics, the Inca used the Quipu a
                sophisticated assembly of knots and strings which was also
                highly transportable and could record decimals up to 10 000.
            </p>
        </div>
        <img src={quipo} alt="" />
    </div>
    <div
        class="w-full bg-contain bg-center bg-no-repeat flex justify-end pt-10 pr-10"
        style="background-image: url({socialStructure}); aspect-ratio: 1280/910"
    >
        <h1
            class="text-[5vw] font-labrada w-1/2 text-end"
            style="line-height: 4vw;"
        >
            Social Structure
        </h1>
    </div>
    <div class="bg-[#68625E] px-10 py-6">
        <p class="font-roboto text-white text-xl">
            The Inca Empire was well known also because of the social structure.
            The Inca organization is highly disciplined, autocratic and
            centralized – the emperor is referred to as Sapa Inca, which means
            ‘Sole Ruler’. The primary social classes of the Inca empire were
            Sapa Inca, Royalty, Nobility and the Ayllu, a group of common
            farmers that worked together in a group associated with relatives or
            kinsmen.
        </p>
    </div>
    <div class="bg-[#BDBABA] flex flex-col gap-5 p-5">
        <div class="bg-[#ACA9A9] p-5 rounded-xl mr-[13vw]">
            <h1 class="font-bold text-3xl">Sapa Inca</h1>
            <p class="ml-3 mt-3 text-xl">
                Supreme Inca political leader, who was also regarded as
                religious: many Incas thought that he was the direct descendant
                of Inti, the Sun god. As the all powerful monarch he was
                entitled to total control over the soil, wealth and population
                of the state.
            </p>
        </div>
        <div class="bg-[#ACA9A9] p-5 rounded-xl ml-[6vw] mr-[6vw]">
            <h1 class="font-bold text-3xl">Royal Family</h1>
            <p class="ml-3 mt-3 text-xl">
                The royal family, relatives of the Inca together with close
                members formed the wealthy and powerful strata of society. They
                belonged to the high ranking nobility and had benefits like
                possession of large grounds, and overseeing some territories of
                the empire.
            </p>
        </div>
        <div class="bg-[#ACA9A9] p-5 rounded-xl ml-[13vw] mr-[0vw]">
            <h1 class="font-bold text-3xl">Nobility</h1>
            <div class="ml-3 mt-3 text-xl flex flex-col gap-4">
                <p>Two types of Inca Nobles:</p>

                <p>
                    <b>Inca by Blood (Panaca):</b> This group comprised
                    individuals who were related to the monarchy and constituted
                    a very closed-knit society. They dominated the government
                    and military services as well as religious authorities.
                    <br />
                    <b>Inca by Privilege:</b> These were people who were not related
                    to the royal family of the empire but were conferred with nobel
                    status on grounds of service to the empire. Such women mainly
                    assumed administrative positions of significance in society.
                </p>
            </div>
        </div>
        <div class="bg-[#ACA9A9] p-5 rounded-xl mr-[13vw]">
            <h1 class="font-bold text-3xl">Ayllu (Common People)</h1>
            <p class="ml-3 mt-3 text-xl">
                Most of the people of this society comprised the ayllu, a
                culture of kinship and family groups that was at the center of
                Inca structure. Some of them still performed the functions of
                farming, herding animals, and making products. The ayllu
                operated in unison on awarded areas belonging to them, and they
                too had obligations to meet with the state, like work (mit’a).
            </p>
        </div>
        <div class="bg-[#ACA9A9] p-5 rounded-xl ml-[6vw] mr-[6vw]">
            <h1 class="font-bold text-3xl">Other commoner or Ayllu Class:</h1>
            <h1 class="bold ml-3 mt-3 text-xl font-bold">
                Artisans and Craftsmen:
            </h1>
            <p class="ml-3 text-xl">
                We know that in Inca society special importance was given to the
                masters of the crafts and artisans. The artifacts they made
                involved items that were utilitarian and those that had ritual
                uses such as pottery, textiles and metals respectively. Some of
                the early ones particularly those who were contracted to provide
                art for nobles had better stand.
            </p>
        </div>
        <div class="bg-[#ACA9A9] p-5 rounded-xl mr-[13vw]">
            <h1 class="bold ml-3 mt-3 text-xl font-bold">
                Yanacona (Servants and Retainers)
            </h1>
            <p class="ml-3 mt-3 text-xl">
                The Yanacona were forced to be the noble’s or the state
                household’s servants. Unlike most of the communities of the
                ayllu, they were in many cases provided physically from their
                families and were operating in specific chores in the service of
                their lords, such as the husbandmen of the royal lands or the
                bureaucratic personnel.
            </p>
        </div>

        <div class="bg-[#ACA9A9] p-5 rounded-xl ml-[6vw] mr-[6vw]">
            <h1 class="bold ml-3 mt-3 text-xl font-bold">
                Slaves and Prisoners of War
            </h1>
            <p class="ml-3 mt-3 text-xl">
                While the Incas did not have an organized form of slavery like
                some other cultures, enemies taken in battle were utilized as
                workers or sometimes, even offerings. They did not have any
                legal rights and continued to exist on the periphery of social
                scale.
            </p>
        </div>
    </div>
    <div class="bg-gray-500 w-full p-10 flex items-center justify-center">
        <div>
            <h1 class="font-labrada text-5xl text-white">
                Government Organization
            </h1>
            <p class="text-[#D6D3D3] text-2xl mt-1">
                called the Tawantinsuyu. It was a monarchy ruled by a single
                leader called the Sapa Inca.
            </p>
        </div>
        <Link to="/structure" class="w-[10vw] my-3">
            <Button
                class="bg-gray-700 text-2xl text-white font-labrada hover:bg-gray-600"
                >Learn More</Button
            >
        </Link>
    </div>
</div>
<Footer
    bgColor="#2D2C2C"
    textColor="#8E8E8E"
    color1="#4C4C4C"
    color2="#5F5F5F"
    color3="#A9A9A9"
/>
