<section id="banner-container">
	<div class="photobanner">
		<img class="first" src="../banner/banner-2.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-3.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-4.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-5.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-6.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-7.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-8.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-9.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-10.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-2.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-3.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-4.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-5.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-6.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-7.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-8.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-9.jpg" alt="Jet as a puppy" />
		<img src="../banner/banner-10.jpg" alt="Jet as a puppy" />
	</div>
</section>

<style>
	#banner-container {
		width: 100%;
		overflow: hidden;
		/* margin: 50px auto; */
		/* background-color: red; */
	}

	#banner-container .photobanner {
		height: 233px;
		width: 3350px;
		display: flex;
		gap: 0.5rem;
	}

	#banner-container .photobanner img {
		max-width: 400px;
		max-height: 320px;
	}

	/*keyframe animations*/
	.first {
		-webkit-animation: bannermove 30s linear infinite;
		-moz-animation: bannermove 30s linear infinite;
		-ms-animation: bannermove 30s linear infinite;
		-o-animation: bannermove 30s linear infinite;
		animation: bannermove 30s linear infinite;
	}

	@keyframes bannermove {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: -2125px;
		}
	}

	@-moz-keyframes bannermove {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: -2125px;
		}
	}

	@-webkit-keyframes bannermove {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: -2125px;
		}
	}

	@-ms-keyframes bannermove {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: -2125px;
		}
	}

	@-o-keyframes bannermove {
		0% {
			margin-left: 0px;
		}
		100% {
			margin-left: -2125px;
		}
	}
</style>
