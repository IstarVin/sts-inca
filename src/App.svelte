<script>
    import Home from "./pages/Home.svelte";
    import About from "./pages/About.svelte";
    import History from "./pages/History.svelte";
    import Culture from "./pages/Culture.svelte";
    import Header from "./lib/Header.svelte";
    import { Router, Link, Route } from "svelte-routing";
</script>

<Router>
    <Header />
    <Route path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/history" component={History} />
    <Route path="/culture" component={Culture} />
</Router>
