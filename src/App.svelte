<script>
    import Government from "./pages/Government.svelte";
    import Architecture from "./pages/Architecture.svelte";
    import Home from "./pages/Home.svelte";
    import History from "./pages/History.svelte";
    import Culture from "./pages/Culture.svelte";
    import Header from "./lib/Header.svelte";
    import Background from "./lib/Background.svelte";
    import { Router, Route } from "svelte-routing";
    import Mason from "./pages/architecture/Mason.svelte";
    import LostCity from "./pages/architecture/LostCity.svelte";
</script>

<Background />
<Router>
    <Header />
    <main class="font-roboto">
        <Route path="/" component={Home} />
        <Route path="/architecture" component={Architecture} />
        <Route path="/culture" component={Culture} />
        <Route path="/government" component={Government} />
        <Route path="/history" component={History} />
        <Route path="/mason" component={Mason} />
        <Route path="/lostcity" component={LostCity} />
    </main>
</Router>
