<script lang="ts">
	import LoginImage from '../../lib/components/LoginImage.svelte';
	import SelectGoals from './SelectGoals.svelte';
	import ContentType from './ContentType.svelte';
	import LearningModes from './LearningModes.svelte';
	import Timeframes from './Timeframes.svelte';

	let counter = 0;
	let items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Strawberry'];
	let selectedItems = [];
	let timeranges = [];
	let contentType = '';
	let learningMode = '';
</script>

<section class="onBoarding sw-[100vw] container mx-auto flex min-h-[100vh] p-2 sm:p-4">
	<LoginImage name="On Boarding" />
	<div
		class="form-container mx-auto flex w-full flex-col bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10"
	>
		<form
			id="form"
			on:submit|preventDefault={() => {
				console.log(selectedItems, contentType);
			}}
			class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"
		>
			<div class="header">
				{#if counter == 0}
					<h2
						class="welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl"
					>
						Let's get started
					</h2>
					<h3 class="welcome-text">Set your goals and preferences to begin.</h3>
				{:else}
					<h2
						class="welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl"
					>
						Preferences
					</h2>
				{/if}
			</div>
			{#if counter == 0}
				<!-- search box container -->
				<SelectGoals bind:items bind:selectedItems />
			{:else}
				<ContentType bind:contentType></ContentType>
				<LearningModes bind:learningMode></LearningModes>
				<Timeframes bind:selectedItems bind:timeranges></Timeframes>
			{/if}
			<div class="btns-container flex justify-between">
				<button
					on:click={() => {
						if (counter > 0) {
							counter--;
						}
						console.log(selectedItems, timeranges, counter);
					}}
					type="button"
					disabled={counter === 0 ? true : false}
					class="mt-4 w-full basis-1/3 rounded-lg border-r-2 bg-indigo-800 px-1 py-2 text-xl text-slate-200 disabled:bg-zinc-500"
					>Back</button
				><button
					on:click={() => {
						counter++;
						console.log(selectedItems, timeranges, contentType, learningMode);
					}}
					type="button"
					class="mt-4 w-full basis-1/3 rounded-lg bg-indigo-800 px-1 py-2 text-xl text-slate-200"
					>Next</button
				>
			</div>
		</form>
	</div>
</section>

<style>
</style>
