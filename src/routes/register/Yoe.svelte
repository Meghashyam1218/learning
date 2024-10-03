<script>
	export let experience = '<2'; // Default experience value

	const incrementExperience = () => {
		if (experience === '<2') experience = '2-4';
		else if (experience === '2-4') experience = '>4';
	};
	
	const decrementExperience = () => {
		if (experience === '>4') experience = '2-4';
		else if (experience === '2-4') experience = '<2';
	};
</script>

<div class="input-field flex flex-col">
	<label for="experience" class="font-medium">Years of Experience <span class="text-red-500">*</span></label>
	<div class="mt-2 flex gap-0 w-[100%]">
		<button
			type="button"
			on:click={decrementExperience}
			class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-l-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"
		>
			-
		</button>

		<input
			id="experience"
			name="experience"
			type="text"
			readonly
			bind:value={experience}
			class="outline-none py-2 text-center px-4 basis-3/5 bg-transparent border-[1px] border-y-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"
		/>

		<button
			type="button"
			on:click={incrementExperience}
			class="bg-transparent border-[1px] basis-1/5 border-zinc-800 p-2 rounded-r-lg text-indigo-800 font-medium text-xl focus:outline-indigo-900"
		>
			+
		</button>
	</div>
</div>
