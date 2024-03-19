<script>
	export let open = false;
	import { slide } from 'svelte/transition';
	const handleClick = () => (open = !open);
</script>

<div class="accordion">
	<button class="header" on:click={handleClick}>
		<div class="text">
			<slot name="head" />
		</div>

		<span class="open-button">+</span>
	</button>

	{#if open}
		<div class="details" transition:slide>
			<slot name="details" />
		</div>
	{/if}
</div>

<style>
	.accordion {
		margin-top: 3rem;
	}

	.header {
		background-color: var(--white);
		border: none;
		display: flex;
		text-align: left;
		align-items: center;
		width: 100%;
		max-width: 833px;
		margin: 0 auto;
		cursor: pointer;
	}

	.header .text {
		flex: 1;
		width: 100%;
		max-width: 833px;
		margin: 0 auto;
	}

	.details {
		width: 100%;
		max-width: 833px;
		margin: 0 auto;
	}

	.open-button {
		background-color: var(--white);
		border: none;
		font-size: 1.5rem;
		margin-left: 1.5rem;
	}
</style>
