<script>
    import GovCard from "./GovCard.svelte";

    import sapaInca from "../../assets/government/sapa ica.png";
    import viceroy from "../../assets/government/viceroy.png";
    import highPriest from "../../assets/government/high priest.png";
    import governor from "../../assets/government/governor.png";
    import council from "../../assets/government/council.png";
    import inspectors from "../../assets/government/inspector.png";
    import military from "../../assets/government/military.png";
    import others from "../../assets/government/others.png";
</script>

<div class="flex flex-col items-center gap-5">
    <GovCard
        name={"Sapa Inca"}
        img={sapaInca}
        desc={'The ruler of the Inca Empire was known as the Sapa Inca, meaning "sole ruler." He held the highest authority in the land, with all others answering to him.'}
    />
    <div class="flex gap-5">
        <GovCard
            name={"Viceroy"}
            img={viceroy}
            desc={"Below the Sapa Inca was the viceroy, or Inkap Rantin. He was a close relative of the Sapa Inca and worked as his closest advisor."}
        />
        <GovCard
            name={"High Priest"}
            img={highPriest}
            desc={'The high priest, called the "Willaq Umu", was also a very powerful man. He was probably second in power to the Sapa Inca due to the importance of religion in the Inca Empire.'}
        />
    </div>
    <div class="flex gap-5">
        <GovCard
            name={"Governors of a Quarter"}
            img={governor}
            desc={"The Inca Empire was divided up into four quarters. Each of these quarters was ruled by a governor called an Apu."}
        />
        <GovCard
            name={"Council of the Realm"}
            img={council}
            desc={"The Sapa Inca also kept a council of men who advised him on major matters. These men were powerful nobles."}
        />
    </div>
    <div class="flex gap-5">
        <GovCard
            name={"Inspectors"}
            img={inspectors}
            desc={'In order to maintain control and to make sure people were paying their taxes and following the ways of the Inca, the Sapa Inca had inspectors that watched over the people. The inspectors were called "tokoyrikoq".'}
        />
        <GovCard
            name={"Military Generals"}
            img={military}
            desc={'There were also military generals. The head general was usually a close relative of the Sapa Inca. These leaders were called "Apukuna".'}
        />
        <GovCard
            name={"Other Officials"}
            img={others}
            desc={"There were many other government officials and leaders throughout the Inca Empire such as priests, military officers, judges, and tax collectors."}
        />
    </div>
</div>
