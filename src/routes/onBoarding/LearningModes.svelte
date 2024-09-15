<script lang="ts">
	export let learningMode = '';
	import { User, Bot } from 'lucide-svelte';
	import { fly } from 'svelte/transition';
</script>

<div
	in:fly={{ delay: 500, duration: 300, x: -30 }}
	out:fly={{ delay: 0, duration: 300, x: -30 }}
	class="learning-mode"
>
	<h1 class="mb-2 text-lg font-medium text-indigo-800">Learning mode</h1>
	<div class="learning-type flex gap-3">
		<div class="type basis-1/2">
			<input
				type="radio"
				class="radio-btn visually-hidden peer absolute"
				id="self-study"
				name="learning-mode"
				bind:group={learningMode}
				value="self"
			/>
			<label
				for="self-study"
				class="flex items-center gap-2 rounded-2xl border-[1px] border-zinc-500 p-4 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
			>
				<User size="24" strokeWidth="1.5" />
				<span>Self Study</span></label
			>
		</div>
		<div class="type basis-1/2">
			<input
				type="radio"
				class="radio-btn visually-hidden peer absolute"
				id="ai-study"
				name="learning-mode"
				bind:group={learningMode}
				value="ai"
			/>
			<label
				for="ai-study"
				class="flex items-center gap-2 rounded-2xl border-[1px] border-zinc-500 p-4 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
			>
				<Bot size="24" strokeWidth="1.5" />
				<span>Ai Generated</span></label
			>
		</div>
	</div>
</div>

<style>
</style>
