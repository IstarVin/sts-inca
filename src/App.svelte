<script>
    import Government from "./pages/Government.svelte";
    import Architecture from "./pages/Architecture.svelte";
    import Home from "./pages/Home.svelte";
    import History from "./pages/History.svelte";
    import Culture from "./pages/Culture.svelte";
    import Header from "./lib/Header.svelte";
    import Background from "./lib/Background.svelte";
    import { Router, Route } from "svelte-routing";
</script>

<Background />
<Router>
    <Header />
    <main class="mt-28">
        <Route path="/" component={Home} />
        <Route path="/architecture" component={Architecture} />
        <Route path="/culture" component={Culture} />
        <Route path="/government" component={Government} />
        <Route path="/history" component={History} />
    </main>
</Router>
