<script>
	export let location = "Kolkata"; // Default location
</script>

<div class="input-field flex flex-col">
	<label for="location" class="font-medium">Location <span class="text-red-500">*</span></label>
	<select
		id="location"
		bind:value={location}
		class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
	>
		<option value="Kolkata">Kolkata</option>
		<option value="Bangalore">Bangalore</option>
		<option value="Chennai">Chennai</option>
		<option value="Mumbai">Mumbai</option>
		<option value="Delhi">Delhi</option>
		<option value="Hyderabad">Hyderabad</option>
	</select>
</div>
