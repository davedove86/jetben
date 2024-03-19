<script>
	import Accordion from '../Accordion.svelte';
	import faqs from './about.js';
	import ContactCta from '../ContactCta.svelte';
	import ClientBanner from '../Client-banner.svelte';
</script>

<svelte:head>
	<title>About Us | Jet & Ben | Durham Constabulary</title>
</svelte:head>

<div class="container-full-width">
	<div class="hero-wrapper">
		<div class="hero-text">
			<h1>About Us</h1>
			<p class="kicker">
				Learn more about Ben who is a cute and cuddly Golden Labrador Police Safety Dog.
			</p>
			<a class="button" href="/contact">Contact Us</a>
		</div>
		<img src="/../clairejetben.jpg" alt="Jet & Ben with Claire" />
	</div>
</div>

<section>
	<div class="container">
		<h2 class="center">Meet The Team</h2>
		<p class="center">Click below to learn more about our team and read their bios.</p>
		<div class="card-wrapper">
			<div class="card">
				<img class="profile" src="/../jet/jet-profile.jpg" alt="Ben the Police Dog" />
				<h3>Jet</h3>
				<p>Hello my name is Jet I am fun and friendly Black Labrador.</p>
				<div class="learn-more-wrapper">
					<a href="/jet" class="learn-more">Learn More</a>
					<img src="/../arrow.svg" alt="arrow icon" />
				</div>
			</div>
			<div class="card">
				<img class="profile" src="/../clairejetben-2.jpg" alt="Claire with Jet & Ben" />
				<h3>Claire</h3>
				<p>Hello my name is Claire and I am Jet & Ben’s favourite two legged human.</p>
				<div class="learn-more-wrapper">
					<a href="/claire" class="learn-more">Learn More</a>
					<img src="/../arrow.svg" alt="arrow icon" />
				</div>
			</div>
			<div class="card">
				<img class="profile" src="/../ben-profile.jpg" alt="Ben the Police Dog" />
				<h3>Ben</h3>
				<p>Hello my name is Ben I am cute and cuddly Golden Labrador.</p>
				<div class="learn-more-wrapper">
					<a href="/ben" class="learn-more">Learn More</a>
					<img src="/../arrow.svg" alt="arrow icon" />
				</div>
			</div>
		</div>
	</div>
</section>

<!-- TODO Add OK9 section -->

<!-- TODO Partners slider -->
<ClientBanner />

<section>
	<div class="container">
		<h2 class="center">Gallery</h2>
		<div class="grid-col-3-images">
			<img src="/../about/about-1.jpg" alt="Ben" />
			<img src="/../about/about-2.jpg" alt="Jet" />
			<img src="/../about/about-3.jpg" alt="Bens" />
			<img src="/../about/about-4.jpg" alt="Kids stroking Ben" />
			<img src="/../about/about-5.jpg" alt="Claire teaching a class" />
			<img src="/../about/about-6.jpg" alt="Kids stroking Ben" />
		</div>
	</div>
</section>

<section>
	<div class="container">
		<div class="faq">
			<h2>FAQ's</h2>
			<p class="center">Below we answer some of the most frequently asked questions</p>
			{#each faqs as faq}
				<Accordion>
					<h3 slot="head">{faq.question}</h3>
					<div slot="details">
						<p>
							{faq.answer}
						</p>
					</div>
				</Accordion>
			{/each}
		</div>
	</div>
</section>

<ContactCta />

<style>
	.profile {
		width: 100px;
		height: 100px;
		border-radius: 100%;
		object-fit: cover;
	}

	.card h3 {
		margin-top: 1rem;
	}

	.faq {
		width: 100%;
	}

	.faq h2 {
		text-align: center;
	}
</style>
