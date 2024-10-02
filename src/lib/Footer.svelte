<script>
    import logo from "../assets/footer/Logo.png";
    import inca from "../assets/footer/Text.svg";

    export let color1 = "#FFB375";
    export let color2 = "#D77A3A";
    export let color3 = "#FF7A29";
    export let bgColor = "#FF914D";
    export let textColor = "#F8C09E";
</script>

<div
    class="text-white py-20 flex flex-col items-center"
    style="background-color: {bgColor};"
>
    <div class="flex flex-col gap-10">
        <div class="flex flex-row gap-24 items-start">
            <div class="flex flex-row items-center gap-x-2">
                <img src={logo} alt="" />
                <img src={inca} alt="" />
            </div>
            <div class="flex flex-row gap-10">
                <div class="flex-col">
                    <h1
                        class="uppercase text-xl mb-3"
                        style="color:{textColor}"
                    >
                        Content
                    </h1>
                    <div>
                        <h1>Louise Adriane C.</h1>
                        <h1>Marlo Gel A.</h1>
                        <h1>Kyle Stephen S.</h1>
                        <h1>Angela Danielle O.</h1>
                        <h1>Jaezer Vynx D.</h1>
                    </div>
                </div>
                <div class="flex-col">
                    <h1
                        class="uppercase text-xl mb-3"
                        style="color:{textColor}"
                    >
                        Development
                    </h1>
                    <div>
                        <h1>Alvin Jay D.</h1>
                    </div>
                </div>
                <div class="flex-col">
                    <h1
                        class="uppercase text-xl mb-3"
                        style="color:{textColor}"
                    >
                        Graphics
                    </h1>
                    <div>
                        <h1>Iman Naseef D.</h1>
                        <h1>Essak Santy B.</h1>
                        <h1>Jalel Ganer G.</h1>
                        <h1>John Clifford P.</h1>
                    </div>
                </div>
            </div>
            <div class="flex flex-row ml-10 gap-3">
                <div
                    class="size-14 rounded-full"
                    style="background-color: {color1};"
                ></div>
                <div
                    class="size-14 rounded-full"
                    style="background-color: {color2};"
                ></div>
                <div
                    class="size-14 rounded-full"
                    style="background-color: {color3};"
                ></div>
            </div>
        </div>
        <div
            class="w-full flex justify-between items-center"
            style="color:{textColor}"
        >
            <h1 class="">in fullfilment sa subject ni sir romneck</h1>
            <div class="flex flex-col items-end">
                <h1>Mindanao State University</h1>
                <h1>Group Inca</h1>
            </div>
        </div>
    </div>
</div>
