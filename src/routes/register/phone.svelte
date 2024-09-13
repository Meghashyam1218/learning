<script>
	export let countryCode = '+91'; // Default country code
	export let phoneNumber = ''; // Phone number input
</script>

<div class="input-field mt-2 flex flex-col">
	<label for="phone" class="font-medium">Phone Number <span class="text-red-500">*</span></label>
	<div class="flex mt-2">
		<!-- Country code input -->
		<input
			id="countryCode"
			name="countryCode"
			type="text"
			bind:value={countryCode}
			placeholder="+91"
			class="outline-none py-2 px-4 rounded-l-lg bg-transparent border-[1px] border-zinc-800 focus:border-r-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide w-20 text-center"
		/>

		<!-- Phone number input -->
		<input
			id="phone"
			name="phone"
			type="tel"
			bind:value={phoneNumber}
			placeholder="Enter your phone number"
			class="outline-none py-2 px-4 rounded-r-lg bg-transparent border-l-0 border-[1px] border-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide w-full"
		/>
	</div>
</div>
