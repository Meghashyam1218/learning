<script>
	export let timeMode = '';
	export let learningMode = '';

	export let hours = '';
	export let availableTimeValues = {};
	import { Tally1, Tally5 } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ delay: 500, duration: 300, x: -30 }}
	out:fly={{ delay: 0, duration: 300, x: -30 }}
	class="Time-mode"
>
	<h1 class="mb-2 text-lg font-medium text-indigo-800">Available hours</h1>
	<div class="Time-type flex gap-3">
		<div class="type basis-1/2">
			<input
				type="radio"
				class="radio-btn visually-hidden peer absolute"
				id="daily"
				name="Time-mode"
				bind:group={timeMode}
				on:change={() => {
					hours = '';
				}}
				value="daily"
			/>
			<label
				for="daily"
				class="flex items-center gap-2 rounded-2xl border-[1px] border-zinc-500 p-4 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
			>
				<Tally1 size="24" strokeWidth="1.5" />
				<span>Daily</span></label
			>
		</div>
		<div class="type basis-1/2">
			<input
				type="radio"
				class="radio-btn visually-hidden peer absolute"
				id="weekly"
				name="Time-mode"
				bind:group={timeMode}
				on:change={() => {
					hours = '';
				}}
				value="weekly"
			/>
			<label
				for="weekly"
				class="flex items-center gap-2 rounded-2xl border-[1px] border-zinc-500 p-4 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
			>
				<Tally5 size="24" strokeWidth="1.5" />
				<span>Weekly</span></label
			>
		</div>
	</div>
	{#if timeMode != '' && learningMode != 'ai'}
		<div class="hours mt-4 flex gap-2">
			{#each { length: availableTimeValues[timeMode].length } as _, i}
				<div class="hour">
					<input
						type="radio"
						class="radio-btn visually-hidden peer absolute"
						id={String(availableTimeValues[timeMode][i])}
						name="available-hours"
						bind:group={hours}
						value={availableTimeValues[timeMode][i]}
					/>
					<label
						for={String(availableTimeValues[timeMode][i])}
						class=" rounded-2xl border-[1px] border-zinc-500 p-2 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
					>
						<span>{availableTimeValues[timeMode][i]} hrs</span></label
					>
				</div>
			{/each}
		</div>
	{/if}
</div>

<style>
</style>
