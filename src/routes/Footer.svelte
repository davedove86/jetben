<footer>
	<div class="container">
		<div class="footer-grid">
			<img src="../logo-white.png" alt="Jet & Ben Logo" />
			<div>
				<p class="footer-heading">Navigation</p>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/schools">Schools</a></li>
					<li><a href="/community">Community</a></li>
					<li><a href="/about">About Us</a></li>
				</ul>
			</div>
			<div>
				<p class="footer-heading">Contact Links</p>
				<ul>
					<li><a href="/contact">Contact Us</a></li>
					<li><a href="mailto:jet&ben@durham.police.uk">jet&ben@durham.police.uk</a></li>
					<li><a href="https://www.facebook.com/jetandben">Facebook</a></li>
					<li><a href="https://www.instagram.com/jetandben/">Instagram</a></li>
					<li><a href="https://twitter.com/jetandben">Twitter</a></li>
				</ul>
			</div>
			<div>
				<p class="footer-heading">Website Information</p>
				<ul>
					<li>
						<a
							href="https://www.cookiepolicygenerator.com/live.php?token=27syoaKiopWVeQuTaaJTfXKun1WV6dBK"
							target="_blank">Privacy Policy</a
						>
					</li>
					<li>
						<a
							href="https://www.cookiepolicygenerator.com/live.php?token=Zn1y49lXv0n165Yl2gSFaaDTg1D1vFLh"
							target="_blank">Cookies Policy</a
						>
					</li>
					<!-- TODO Add sitemap -->
					<li><a href="/">Sitemap</a></li>
				</ul>
			</div>
		</div>
		<p class="center">
			<a class="center" href="https://www.dovedesign.io">Website by Dove Design</a>
		</p>
	</div>
</footer>

<style>
	footer {
		background-color: var(--black);
		color: var(--white);
		padding: 2rem 0;
		margin-top: auto;
		font-size: 0.875rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 2rem;
		padding: 2rem 0;
	}

	footer img {
		width: 100%;
		max-width: 113px;
	}

	.footer-heading {
		font-weight: bold;
		margin-bottom: 1rem;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	ul li {
		margin-bottom: 0.5rem;
	}

	ul li a {
		color: #aaa;
	}

	footer p {
		margin: 0;
	}

	.center {
		text-align: center;
		color: #aaa;
	}

	.center a {
		color: #aaa;
	}

	@media (max-width: 768px) {
		.footer-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 530px) {
		.footer-grid {
			grid-template-columns: 1fr;
		}

		.center {
			text-align: left;
		}
	}
</style>
