<script lang="ts">
	import GoalRangeSelect from './GoalRangeSelect.svelte';

	import SelectGoals from './SelectGoals.svelte';
	import LoginImage from '../../lib/components/LoginImage.svelte';
	import type { DateRange } from 'bits-ui';
	// import { flyAndScale } from '$lib/utils';
	import { fly } from 'svelte/transition';
	let counter = 0;
	let items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Strawberry'];
	let selectedItems = [];
	let timeranges = [];
</script>

<section class="onBoarding sw-[100vw] container mx-auto flex min-h-[100vh] p-4">
	<LoginImage name="On Boarding" />
	<div class="form-container mx-auto flex flex-col bg-slate-100 px-10 sm:basis-2/3 md:basis-1/2">
		<form
			id="form"
			on:submit|preventDefault={() => {
				console.log(selectedItems);
			}}
			class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"
		>
			<div class="header">
				<h2
					class="welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl"
				>
					{#if counter == 0}
						Let's get started
					{:else}
						Choose a timeline for your selected goals.
					{/if}
				</h2>

				<h3 class="welcome-text">Set your goals and preferences to begin.</h3>
			</div>
			<!-- search box container -->
			{#if counter == 0}
				<SelectGoals bind:items bind:selectedItems />
			{:else if selectedItems.length != 0}
				{#each selectedItems as item, i (item)}
					<div transition:fly={{ delay: 500, duration: 300, x: 30 }} class="timeframes-container">
						<div class="timeframe mt-2">
							<h2 class="mb-2 text-xl font-medium text-indigo-800">{item}</h2>
							<GoalRangeSelect bind:value={timeranges[i]}></GoalRangeSelect>
						</div>
					</div>
				{/each}
			{:else}
				<p class=" text-xl font-medium text-indigo-700">No goals selected</p>
			{/if}
			<button
				on:click={() => {
					counter++;
					console.log(selectedItems, timeranges);
				}}
				type="button"
				class="mt-4 rounded-xl bg-indigo-800 px-1 py-2 text-xl text-slate-200">Next</button
			>
		</form>
	</div>
</section>

<style>
</style>
