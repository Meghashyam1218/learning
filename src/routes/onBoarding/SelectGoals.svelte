<script>
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { crossfade } from 'svelte/transition';
	const [send, receive] = crossfade({});
	let searchQuery = '';
	export let items = ['Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Strawberry'];

	export let selectedItems = [];
	let filteredItems = items; // Default is all items
	let timeoutId;

	// Function to handle the search with debouncing
	function handleSearch(event) {
		const query = event.target.value;

		// Clear the previous timeout
		clearTimeout(timeoutId);

		// Set a new timeout for debouncing
		timeoutId = setTimeout(() => {
			searchQuery = query;
			updateFilteredItems();
		}, 300);
	}

	// Function to update filtered items based on search query and selection
	function updateFilteredItems() {
		filteredItems = items.filter(
			(item) =>
				item.toLowerCase().includes(searchQuery.toLowerCase()) && !selectedItems.includes(item)
		);
	}

	function isSelected(item) {
		return selectedItems.includes(item);
	}

	function move(item, from, to) {
		to.push(item);
		return [from.filter((i) => i !== item), to];
	}

	function movefilteredItems(item) {
		[selectedItems, filteredItems] = move(item, selectedItems, filteredItems);
		items = filteredItems;
	}

	function moveselectedItems(item) {
		[filteredItems, selectedItems] = move(item, filteredItems, selectedItems);
		items = filteredItems;
	}
</script>

<div
	in:fly={{ delay: 500, duration: 300, x: -30 }}
	out:fly={{ duration: 300, x: 30 }}
	class="search-container mt-2 flex flex-col"
>
	<label for="email" class="text-lg font-medium text-indigo-800"
		>Select Goals<span class="text-red-500">*</span>
	</label>
	<input
		id="search"
		name="search"
		type="search"
		placeholder="Search your goal"
		on:input={handleSearch}
		class="search-input bg-url('./search.svg') my-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
	/>
	<!-- Display selected items at the top -->
	{#if selectedItems.length > 0}
		<h3 class="m-2 mb-1 text-lg font-medium">Selected Goals:</h3>
		<div class="chips-container my-2 flex flex-wrap gap-4">
			{#each selectedItems as item (item)}
				<div in:receive={{ key: item }} out:send={{ key: item }} class="chip selected">
					<label
						for={item}
						class="checkbox-label cursor-pointer rounded-2xl border-[1px] border-indigo-700 px-3 py-1 font-medium outline-1 outline-indigo-800 focus-within:bg-slate-50 focus-within:outline hover:bg-slate-50 hover:outline focus:bg-slate-50 focus:outline"
						>{item}<span class="remove ml-1">&times;</span><input
							type="checkbox"
							id={item}
							name="goals"
							value={item}
							checked={isSelected(item)}
							on:change={() => movefilteredItems(item)}
							class="visually-hidden"
						/></label
					>
				</div>
			{/each}
		</div>
	{/if}

	<!-- Display filtered (unselected) items as checkboxes -->
	{#if filteredItems.length > 0}
		<h3 class="m-2 mb-1 text-lg font-medium">Available Goals:</h3>
		<div class="chips-container my-2 flex flex-wrap gap-4">
			{#each filteredItems as item, i ((item, i))}
				<div in:receive={{ key: item }} out:send={{ key: item }} class="chip">
					<label
						for={item}
						class="checkbox-label cursor-pointer rounded-2xl border-[1px] border-zinc-300 px-3 py-1 font-medium outline-1 outline-indigo-800 focus-within:bg-slate-50 focus-within:outline hover:bg-slate-50 hover:outline focus:bg-slate-50 focus:outline"
						>{item}<input
							type="checkbox"
							id={item}
							value={item}
							checked={isSelected(item)}
							on:change={() => moveselectedItems(item)}
							class="visually-hidden"
						/></label
					>
				</div>
			{/each}
		</div>
	{/if}
</div>
<p class="mx-auto w-[100%] max-w-[400px]">
	Can't find your goal ? <a
		href="/#"
		class="font-medium text-indigo-800 underline underline-offset-2">Submit one here.</a
	>
</p>

<style>
	.search-input {
		background: url(/search.svg) no-repeat scroll 10px 10px;
		padding-left: 35px;
	}
</style>
