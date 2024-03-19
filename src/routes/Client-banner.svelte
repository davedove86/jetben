<section id="banner-container">
	<h2 class="center">Our Partners</h2>
	<p class="center">We work alongside a number of organisations and charities</p>
	<div class="photobanner">
		<img class="first" src="../client-banner/pcc.svg" alt="Durham PCC Logo" />
		<img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" />
		<img src="../client-banner/ceop.svg" alt="CEOP logo" />
		<img src="../client-banner/dbc.svg" alt="Darlington Borough Council" />
		<img src="../client-banner/dcc.svg" alt="Durham County Council Logo" />
		<img src="../client-banner/dc.svg" alt="Durham Constabulary logo" />
		<img src="../client-banner/ok9.svg" alt="OK9 Logo" />
		<img src="../client-banner/pcc.svg" alt="Durham PCC Logo" />
		<img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" />
		<img src="../client-banner/ceop.svg" alt="CEOP logo" />
		<img src="../client-banner/dbc.svg" alt="Darlington Borough Council" />
		<img src="../client-banner/dcc.svg" alt="Durham County Council Logo" />
		<img src="../client-banner/dc.svg" alt="Durham Constabulary logo" />
		<img src="../client-banner/ok9.svg" alt="OK9 Logo" />
		<img src="../client-banner/pcc.svg" alt="Durham PCC Logo" />
		<img src="../client-banner/daac.svg" alt="Durham Agency Agaist Crime Logo" />
		<img src="../client-banner/ceop.svg" alt="CEOP logo" />
		<img src="../client-banner/dbc.svg" alt="Darlington Borough Council" />
		<img src="../client-banner/dcc.svg" alt="Durham County Council Logo" />
		<img src="../client-banner/dc.svg" alt="Durham Constabulary logo" />
		<img src="../client-banner/ok9.svg" alt="OK9 Logo" />
	</div>
</section>

<style>
	#banner-container {
		width: 100%;
		overflow: hidden;
	}

	#banner-container .photobanner {
		height: 150px;
		width: 3350px;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8rem;
		background-color: var(--accent);
		border-top: 5px solid var(--black);
		border-bottom: 5px solid var(--black);
		margin-top: 3rem;
	}

	#banner-container .photobanner img {
		max-width: 100px;
		max-height: 100px;
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
