<script>
	import Schools from './schools.js';
	import Competitions from './competitions.js';
	import ContactCta from '../ContactCta.svelte';
</script>

<svelte:head>
	<title>Schools | Jet & Ben | Durham Constabulary</title>
</svelte:head>
<section class="no-margin">
	<div class="container">
		<div class="hero-wrapper">
			<div class="hero-text">
				<h1>Schools</h1>
				<p class="kicker">
					Jet & Ben would like to help all schools and early years providers within County Durham
					and Darlington to educate children especially when it comes to their safety. Find out more
					below about the lessons we can provide to you.
				</p>
				<a class="button" href="/contact">Contact Us</a>
			</div>
			<img src="/../clairejetben.jpg" alt="Jet & Ben with Claire" />
		</div>
	</div>
</section>

<section>
	<div class="container">
		<div class="center">
			<h2>School Services We Offer</h2>
			<p>
				We offer a range of services and resources for schools, please contact us for further
				information.
			</p>
		</div>
		<div class="grid-col-3">
			<div class="card">
				<img src="/../presentations-icon.svg" alt="teachers hat" />
				<h3>Presentations</h3>
				<p>
					We deliver a range of presentations for different ages and abilities including, Personal
					Safety, Internet Safety and People Who Help Us.
				</p>
			</div>
			<div class="card">
				<img src="/../meet-greet-icon.svg" alt="teachers hat" />
				<h3>Meet & Greet</h3>
				<p>
					Are you having a summer fair, charity event or anything within school where a cuddly cute
					dog would make a nice addition then why not invite us along.
				</p>
			</div>
			<div class="card">
				<img src="/../compititions-icon.svg" alt="teachers hat" />
				<h3>Compititions</h3>
				<p>
					Teachers watch this space for regular competitions that your school can get involved with
					and hopefully win some great prizes.
				</p>
			</div>
		</div>
	</div>
</section>

<!-- TODO Add in schools slider here -->

<section>
	<div class="container">
		<div class="card-col-2">
			{#each Schools as school}
				<div class="yellow-card">
					<h3>{school.name}</h3>
					<p>{school.description}</p>
					<a class="button" href="/">Learn More</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- TODO School booking form -->

<section>
	<div class="container">
		<div class="card-col-2">
			{#each Competitions as competition}
				<div class="card-xmas">
					<img class="xmas-card" src={competition.img} alt={competition.name} />
					<div class="card-text">
						<h3>{competition.name}</h3>
						<p>{competition.description}</p>
						<a class="button" href="/">Learn More</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<section>
	<div class="container">
		<h2 class="center">Gallery</h2>
		<div class="grid-col-3-images">
			<img src="/../school/school-1.jpg" alt="Claire & Ben" />
			<img src="/../school/school-2.jpg" alt="Claire teaching a class" />
			<img src="/../school/school-3.jpg" alt="Claire teaching a class" />
			<img src="/../school/school-4.jpg" alt="Kids stroking Ben" />
			<img src="/../school/school-5.jpg" alt="Claire teaching a class" />
			<img src="/../school/school-6.jpg" alt="Kids stroking Ben" />
		</div>
	</div>
</section>

<section>
	<div class="container">
		<ContactCta />
	</div>
</section>

<style>
	.card img {
		width: 100px;
		height: 100px;
	}

	.card-col-2 {
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 1rem;
	}

	.yellow-card {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		background-color: var(--accent);
		padding: 1.5rem;
		border: 5px solid var(--black);
		border-radius: 3px;
	}

	.yellow-card a {
		margin-top: auto;
	}

	.card-xmas {
		display: flex;
		flex-direction: column;
	}

	.card-text {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-start;
		width: 100%;
		height: 100%;
		object-fit: cover;
		padding: 30px;
		border-radius: var(--border-radius);
		box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	}

	@media (max-width: 768px) {
		.card-col-2 {
			grid-template-columns: 1fr;
		}
	}
</style>
