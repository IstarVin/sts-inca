<script lang="ts">
    import {fade} from "svelte/transition";
</script>

<div transition:fade>
    <slot></slot>
</div>