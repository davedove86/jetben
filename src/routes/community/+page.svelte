<script>
	import ContactCta from '../ContactCta.svelte';
</script>

<svelte:head>
	<title>Community | Jet & Ben | Durham Constabulary</title>
</svelte:head>
<section class="no-margin">
	<div class="container">
		<div class="hero-wrapper">
			<div class="hero-text">
				<h1>Comunity</h1>
				<p class="kicker">
					Jet & Ben maintain many links within the local community, attending organised events,
					visiting day centres, care homes or out of school groups. If you run a local community
					group find out more here.
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
			<h2>Community services we offer</h2>
			<p>
				Hello and welcome to our community page, we regularly like to engage with our local
				community groups.
			</p>
			<p>
				If you run a community group or are organising a local community event you can contact us to
				see how we can assist you.
			</p>
			<p>
				Whether that be a meet and greet or delivering safety information to youth groups or out of
				school groups.
			</p>
		</div>
		<div class="grid-col-3">
			<div class="card">
				<img src="/../care-home-icon.svg" alt="house icon" />
				<h3>Care Homes & Day Centres</h3>
				<p>
					We are happy to visit you as a meet and greet or if you would prefer something more formal
					such as a question and answer session or even a safety session for your residents, please
					contact us with your request or to find out more.
				</p>
			</div>
			<div class="card">
				<img src="/../school-icon.svg" alt="group of people icon" />
				<h3>Out Of School Groups</h3>
				<p>
					We often visit out of school groups whether that be on an evening or in the holidays, if
					you would like to find out more or make an enquiry then please feel free to contact us.
				</p>
			</div>
			<div class="card">
				<img src="/../community-events-icon.svg" alt="dog bone on a stage" />
				<h3>Community Events</h3>
				<p>
					If you are organising a local community event and would like us to attend for a meet and
					greet, question and answer and photo opportunities with the furry duo then please contact
					us with your request.
				</p>
			</div>
		</div>
	</div>
</section>

<section>
	<div class="container">
		<h2 class="center">Gallery</h2>
		<div class="grid-col-3-images">
			<img src="/../community/community-1.jpg" alt="Ben" />
			<img src="/../community/community-2.jpg" alt="Jet and ben" />
			<img src="/../community/community-3.jpg" alt="Ben with staff" />
			<img src="/../community/community-4.jpg" alt="Community event" />
			<img src="/../community/community-5.jpg" alt="Jet with police officers" />
			<img src="/../community/community-6.jpg" alt="Claire and Ben" />
		</div>
	</div>
</section>

<section>
	<div class="container">
		<ContactCta />
	</div>
</section>

<style>
	.card {
		display: flex;
	}

	.card img {
		width: 100px;
		height: 100px;
		margin-bottom: 1rem;
	}
</style>
