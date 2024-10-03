<script>
    import { onMount } from "svelte";
    import agri from "../../assets/culture/Food and Agriculture.png";
    import { headerBg } from "../../stores/header";

    onMount(() => {
        let past = document.body.style.backgroundColor;
        $headerBg = "#DBFDD8";
        document.body.style.backgroundColor = "#DBFDD8";
        return () => {
            document.body.style.backgroundColor = past;
        };
    });
</script>

<div class="flex items-center justify-center w-full">
    <img src={agri} alt="" class="" />
</div>
