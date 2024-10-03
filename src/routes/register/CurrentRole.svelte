<script>
	export let currentRole = "Full-Stack Developer"; // Default role
</script>

<div class="input-field flex flex-col">
	<label for="currentRole" class="font-medium">Current Role <span class="text-red-500">*</span></label>
	<select
		id="currentRole"
		bind:value={currentRole}
		class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
	>
		<option value="Full-Stack Developer">Full-Stack Developer</option>
		<option value="Frontend Developer">Frontend Developer</option>
		<option value="Backend Developer">Backend Developer</option>
		<option value="Mobile App Developer">Mobile App Developer</option>
		<option value="Game Developer">Game Developer</option>
		<option value="Data Scientist">Data Scientist</option>
		<option value="Software Engineer">Software Engineer</option>
	</select>
</div>
