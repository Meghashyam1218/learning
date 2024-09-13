<script>
	export let age = 18; // Initial age value

	const incrementAge = () => (age += 1);
	const decrementAge = () => {
		if (age > 0) age -= 1;
	};
</script>

<div class="input-field flex flex-col">
	<label for="age" class="font-medium">Age <span class="text-red-500">*</span></label>

	<div class="mt-2 flex gap-0 w-[100%]">
		<button
			type="button"
			on:click={decrementAge}
			class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-l-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"
			>-</button
		>

		<input
			id="age"
			name="age"
			type="number"
			bind:value={age}
			min="0"
			max="100"
			placeholder="Enter your mail address"
			class="outline-none py-2 text-center px-4 basis-3/5 bg-transparent border-[1px] border-y-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"
		/>

		<button
			type="button"
			on:click={incrementAge}
			class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-r-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"
			>+</button
		>
	</div>
</div>

<style>
	/* Chrome, Safari, Edge, Opera */
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}

	/* Firefox */
	input[type='number'] {
		-moz-appearance: textfield;
	}
</style>
