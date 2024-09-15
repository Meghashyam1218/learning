<script lang="ts">
	import LoginImage from '../../lib/components/LoginImage.svelte';
	import SelectGoals from './SelectGoals.svelte';
	import ContentType from './ContentType.svelte';
	import LearningModes from './LearningModes.svelte';
	import Timeframes from './Timeframes.svelte';
	import TimeAvailability from './TimeAvailability.svelte';

	let counter = 0;

	let items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Strawberry'];
	let selectedItems = [];

	let contentType = '';

	let learningMode = '';

	let timeMode = '';
	let hours = '';
	let availableTimeValues = { weekly: [168, 140], daily: [24, 8, 10] };

	let timeranges = [];
</script>

<section class="onBoarding sw-[100vw] container mx-auto flex h-[100vh] p-2 sm:p-4">
	<LoginImage name="On Boarding" />
	<div
		data-lenis-prevent
		class="form-container mx-auto flex w-full flex-col overflow-y-scroll bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10"
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
			{:else if counter == 1}
				<ContentType bind:contentType></ContentType>
				<LearningModes bind:learningMode></LearningModes>
				<TimeAvailability bind:timeMode bind:hours bind:availableTimeValues bind:learningMode />
			{:else if counter == 2}
				<Timeframes bind:selectedItems bind:timeranges></Timeframes>
			{/if}
			<div class="btns-container mb-10 flex justify-between">
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
	.form-container::-webkit-scrollbar {
		width: 7px;
	}

	.form-container::-webkit-scrollbar-track {
		background-color: #e4e4e4;
		border-radius: 100px;
	}

	.form-container::-webkit-scrollbar-thumb {
		border-radius: 100px;
		border: 6px solid rgba(0, 0, 0, 0.18);
		border-left: 0;
		border-right: 0;
		background-color: #8070d4;
	}
</style>
