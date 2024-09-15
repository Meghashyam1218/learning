<script lang="ts">
	import DateRangePicker from './DateRangePicker.svelte';

	import { fly } from 'svelte/transition';
	export let selectedItems = [];
	export let timeranges = [];
</script>

<div
	in:fly={{ delay: 500, duration: 300, x: -30 }}
	out:fly={{ delay: 0, duration: 300, x: -30 }}
	class="goalsrange"
>
	<h2 class="mb-2 mt-2 text-lg font-medium text-indigo-800">
		Choose a timeline for your selected goals.
	</h2>
	{#if selectedItems.length != 0}
		<div class="timeframes-container">
			{#each selectedItems as item, i (item)}
				<div class="timeframe mt-2">
					<h2 class="mb-2 text-lg font-medium">{item}</h2>
					<DateRangePicker bind:value={timeranges[i]}></DateRangePicker>
				</div>
			{/each}
		</div>
	{:else}
		<p class=" text-lg font-medium">No goals selected</p>
	{/if}
</div>

<style>
</style>
