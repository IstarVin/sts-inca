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
    import { Link } from "svelte-routing";

    let slides = [
        { name: "Introduction", image: intro, to: "/" },
        { name: "Government", image: gov, to: "/government" },
        { name: "Architecture", image: archi, to: "/architecture" },
        { name: "Road Structure", image: road, to: "/architecture" },
        { name: "Food & Agriculture", image: food, to: "/agriculture" },
        { name: "Beliefs", image: beliefs, to: "/culture" },
        { name: "Social Structure", image: social, to: "/culture" },
        { name: "Art", image: art, to: "/" },
        { name: "Decline of the Empire", image: decline, to: "/" },
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
        {#each slides as { name, image, to }}
            <div class="mx-4">
                <Card img={image} class="bg-primary-100 border-primary-100">
                    <div class="flex flex-col items-center">
                        <h5
                            class="mb-2 text-xl font-bold tracking-tight text-gray-800 dark:text-white"
                        >
                            {name}
                        </h5>
                        <Link {to}>
                            <Button class="font-abel">Learn More</Button>
                        </Link>
                    </div>
                </Card>
            </div>
            <!-- <Slides {name} {image} /> -->
        {/each}
    </Carousel>
</div>
