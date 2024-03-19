<section class="grey-background">
	<div class="container">
		<div class="grid-col-2">
			<div class="card">
				<h3>Get In Touch</h3>
				<p>
					If you would like to know more about what we can do please contact us using the methods
					below or visit our social media pages.
				</p>
				<div class="flex">
					<img src="/../mail-icon.svg" alt="community award icon" />
					<a href="mailto:jet&ben@durham.police.uk">jet&ben@durham.police.uk</a>
				</div>
				<div class="flex">
					<img src="/../facebook-icon.svg" alt="community award icon" />
					<a href="https://www.facebook.com/jetandben">Facebook</a>
				</div>
				<div class="flex">
					<img src="/../instagram-icon.svg" alt="community award icon" />
					<a href="https://www.instagram.com/jetandben/">Instagram</a>
				</div>
				<div class="flex">
					<img src="/../twitter-icon.svg" alt="community award icon" />
					<a href="https://twitter.com/jetandben">Twitter</a>
				</div>
			</div>

			<!-- TODO fix form submission issues -->

			<div class="card">
				<h3>Send us a message</h3>
				<script context="module">
					export const prerender = true;
				</script>

				<form name="contact" method="POST" data-netlify="true" action="/success">
					<p>
						<label>Your Name: <input type="text" name="name" /></label>
					</p>
					<p>
						<label>Your Email: <input type="email" name="email" /></label>
					</p>
					<p>
						<label>Message: <textarea name="message"></textarea></label>
					</p>
					<p>
						<button type="submit">Send</button>
					</p>
					<input type="hidden" name="contact" value="contact" />
				</form>
			</div>
		</div>
	</div>
</section>

<style>
	.flex {
		display: flex;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	.flex a {
		margin: 0;
	}
	.flex img {
		width: 50px;
	}

	form {
		margin: 1rem 0;
	}

	/* form div {
		display: flex;
		flex-direction: column;
		margin-bottom: 1rem;
	} */

	form label {
		margin-bottom: 0.5rem;
	}

	form input,
	form textarea {
		padding: 0.7rem;
		border: 0.5px solid var(--black);
		border-radius: 0.5rem;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
	}

	form button {
		margin-top: 2rem;
	}
</style>
