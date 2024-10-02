<script>
    import art from "../assets/history/art.png";
    import his1 from "../assets/history/his1.png";
    import his2 from "../assets/history/his2.png";
    import his3 from "../assets/history/his3.png";
    import his4 from "../assets/history/his4.png";

    import Footer from "../lib/Footer.svelte";

    import { headerBg } from "../stores/header";

    $headerBg = "#FFFFFF";

    // onMount(() => {
    //     document.body.classList.add("bg-gray-100");
    //
    //     // Clean up if needed when the component is destroyed
    //     return () => {
    //         document.body.classList.remove("bg-gray-100");
    //     };
    // });
</script>

<div>
    <img
        src={art}
        alt="art"
        class="w-full h-[100vh] object-cover object-bottom"
    />
    <div class="absolute left-10 top-80 text-primary-50">
        <h1 class="text-5xl uppercase">Inca Civilization</h1>
        <h4 class="text-9xl uppercase">History</h4>
    </div>
    <div
        class="flex mt-10 px-[15vw] py-[5vh] items-center font-roboto gap-x-16"
    >
        <p class="py text-xl w-[60%]">
            <b>1. Origins (Early 1200s) </b>
            <br />
            The Inca civilization started as a small tribe in the Cuzco Valley, Peru.
            According to legend, Manco Cápac founded the city of Cuzco, which became
            the empire's capital. Over time, the Incas expanded, eventually establishing
            dominance over neighboring peoples.
            <br />
            <br />
            <b>2. Expansion under Pachacuti (1438-1471) </b>
            <br />
            The Inca Empire’s expansion began under Pachacuti, who reorganized the
            state, created a powerful army, and launched campaigns that turned the
            Incas into a dominant empire. He divided the empire into four regions
            (suyus) and introduced an efficient administrative system.
            <br />
            <br />
            <b>3. Peak of the Empire (Late 15th Century)</b>
            <br />
            At its height, the empire stretched from modern-day Colombia to Chile
            under rulers like Tupac Inca Yupanqui and Huayna Capac. The Incas built
            a vast network of roads, known as Qhapaq Ñan, to connect the empire.
            Their economy was based on agriculture, particularly terracing and irrigation.
        </p>
        <img src={his1} alt="history1" class="w-[40%]" />
    </div>
    <div
        class="mx-[10vw] mt-20 bg-cover"
        style="background-image: url({his2});"
    >
        <div
            class="relative w-[20vw] left-[13vw] h-7 bg-[#146B8D] -translate-y-full"
        ></div>
        <div class="flex px-10 py-6 gap-8 justify-evenly text-xl">
            <p class="flex-1">
                <b>4. Society and Achievements</b> <br />
                The Incas had advanced agricultural, architectural, and administrative
                systems. They built impressive cities like Machu Picchu and developed
                religious practices centered around the sun god, Inti. The Sapa Inca
                was considered a divine ruler, and the empire's administration was
                highly organized.
            </p>
            <p class="flex-1">
                <b>5. Decline and Spanish Conquest (1532-1572)</b> <br />
                The Inca Empire was weakened by a civil war between brothers Atahualpa
                and Huáscar. In 1532, Spanish conquistador Francisco Pizarro captured
                and later executed Atahualpa, which marked the beginning of the Spanish
                conquest. Resistance continued until 1572, when the last Inca ruler,
                Túpac Amaru, was captured.
            </p>
            <p class="flex-1">
                <b>6. Legacy</b> <br />
                Although the empire fell, the Inca's impact endures. The Quechua
                language is still spoken, and their impressive architectural feats,
                such as Machu Picchu, remain a testament to their innovation and
                legacy.
            </p>
        </div>
    </div>
    <div
        class="bg-cover mt-28 mr-[20vw] px-32 py-8 mb-20 h-[52vh]"
        style="background-image: url({his3});"
    >
        <h1 class="text-6xl uppercase font-bold mb-7">Inca Civilization</h1>
        <img src={his4} alt="" class="relative w-[120%]" />
    </div>
</div>

<Footer
    color1="#0D475D"
    color2="#186081"
    color3="#51ADD5"
    bgColor="#146B8D"
    textColor="#82ADBE"
/>
