<script>
    import Carousel from "svelte-carousel";
    import Slides from "./Slides.svelte";
    import { Card, Button } from "flowbite-svelte";

    import intro from "../../assets/home/slideshows/intro.png";
    import gov from "../../assets/home/slideshows/gov.png";
    import archi from "../../assets/home/slideshows/archi.png";
    import road from "../../assets/home/slideshows/road.png";
    import food from "../../assets/home/slideshows/food.png";
    import beliefs from "../../assets/home/slideshows/beliefs.png";
    import social from "../../assets/home/slideshows/social.png";
    import art from "../../assets/home/slideshows/art.png";
    import decline from "../../assets/home/slideshows/decline.png";

    let slides = [
        { name: "Introduction", image: intro },
        { name: "Government", image: gov },
        { name: "Architecture", image: archi },
        { name: "Road Structure", image: road },
        { name: "Food & Agriculture", image: food },
        { name: "Beliefs", image: beliefs },
        { name: "Social Structure", image: social },
        { name: "Art", image: art },
        { name: "Decline of the Empire", image: decline },
    ];
</script>

<div class=" ">
    <Carousel
        particlesToShow={5}
        duration={1000}
        arrows={false}
        autoplay={true}
        autoplayDuration={2000}
        dots={false}
        pauseOnFocus={true}
        particlesToScroll={0}
    >
        {#each slides as { name, image }}
            <div class="mx-4">
                <Card img={image} class="bg-primary-100 border-primary-100">
                    <div class="flex flex-col items-center">
                        <h5
                            class="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white"
                        >
                            {name}
                        </h5>
                        <Button>Learn More</Button>
                    </div>
                </Card>
            </div>
            <!-- <Slides {name} {image} /> -->
        {/each}
    </Carousel>
</div>
