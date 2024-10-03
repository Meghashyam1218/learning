<script lang="ts">
	export let contentTypes: string[] = [];
	import { LetterText, CassetteTape, Film } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	// Helper function to toggle selection in the array
	function toggleContentType(value: string) {
		if (contentTypes.includes(value)) {
			contentTypes = contentTypes.filter(type => type !== value);
		} else {
			contentTypes = [...contentTypes, value];
		}
	}
</script>

<div
	in:fly={{ delay: 500, duration: 300, x: -30 }}
	out:fly={{ delay: 0, duration: 300, x: -30 }}
	class="preferences"
>
	<h1 class="mb-2 text-lg font-medium text-indigo-800">Content type</h1>
	<div class="content-type flex gap-3">
		<div class="type basis-1/3">
			<input
				type="checkbox"
				class="checkbox-btn visually-hidden peer absolute"
				id="text"
				name="content-type"
				on:change={() => toggleContentType('text')}
				checked={contentTypes.includes('text')}
			/>
			<label
				for="text"
				class="flex items-center gap-2 rounded-2xl border-[1px] border-zinc-500 p-4 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
			>
				<LetterText size="24" strokeWidth="1.5" />
				<span>Text</span>
			</label>
		</div>
		<div class="type basis-1/3">
			<input
				type="checkbox"
				class="checkbox-btn visually-hidden peer absolute"
				id="audio"
				name="content-type"
				on:change={() => toggleContentType('audio')}
				checked={contentTypes.includes('audio')}
			/>
			<label
				for="audio"
				class="flex items-center gap-2 rounded-2xl border-[1px] border-zinc-500 p-4 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
			>
				<CassetteTape size="24" strokeWidth="1.5" />
				<span>Audio</span>
			</label>
		</div>
		<div class="type basis-1/3">
			<input
				type="checkbox"
				class="checkbox-btn visually-hidden peer absolute"
				id="video"
				name="content-type"
				on:change={() => toggleContentType('video')}
				checked={contentTypes.includes('video')}
			/>
			<label
				for="video"
				class="flex items-center gap-2 rounded-2xl border-[1px] border-zinc-500 p-4 px-6 font-medium outline-2 outline-indigo-700 peer-checked:bg-indigo-50 peer-checked:outline max-sm:flex-col"
			>
				<Film size="24" strokeWidth="1.5" />
				<span>Video</span>
			</label>
		</div>
	</div>
</div>

<style>
	/* Add your styles here */
</style>
