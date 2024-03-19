<script>
	import Footer from './Footer.svelte';
	import Navigation from './Navigation.svelte';
	import './styles.css';
</script>

<Navigation />

<main>
	<slot />
</main>

<Footer />
