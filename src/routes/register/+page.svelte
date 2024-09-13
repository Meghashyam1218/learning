<script>
	import LoginImage from '../../lib/components/LoginImage.svelte';

	import Age from './Age.svelte';
	import Phone from './phone.svelte';
	let age = 18;
	let name = '';
	let email = '';
	let password = '';
	let countryCode = '+91';
	let phoneNumber = '';

	async function registerUser() {
		// Handle form submission logic here
		console.log('Form submitted with:', { name, email, password, age, countryCode, phoneNumber });

		// Simulate server response
		// Based on the response, you can redirect to the dashboard or onboarding page
		// e.g. window.location.href = '/dashboard';
	}
</script>

<section class="login container mx-auto rounded-md w-[100vw] min-h-[100vh] p-4 flex">
	<LoginImage name="Register"></LoginImage>
	<div
		class="login-left bg-slate-100 sm:basis-2/3 md:basis-1/2 px-10 flex flex-col justify-center mx-auto"
	>
		<form
			method="POST"
			on:submit|preventDefault={registerUser}
			class="mt-10 flex flex-col gap-4 mx-auto w-[100%] max-w-[400px]"
		>
			<div class="header">
				<h2 class="welcome font-semibold text-4xl font-mono text-zinc-700 tracking-tight">
					Welcome!
				</h2>
				<h3 class="welcome-text">Your gateway to knowledge starts here.</h3>
			</div>
			<div class="input-feild mt-2 flex flex-col">
				<label for="name" class="font-medium">Name <span class="text-red-500">*</span> </label>
				<input
					id="name"
					name="name"
					type="text"
					bind:value={name}
					placeholder="Enter your name"
					class="outline-none py-2 px-4 mt-2 rounded-lg bg-transparent border-[1px] border-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"
				/>
			</div>
			<Age bind:age />
			<Phone bind:countryCode bind:phoneNumber />
			<div class="input-feild flex flex-col">
				<label for="email" class="font-medium">Email <span class="text-red-500">*</span> </label>
				<input
					id="email"
					name="email"
					type="email"
					bind:value={email}
					placeholder="Enter your mail address"
					class="outline-none py-2 px-4 mt-2 rounded-lg bg-transparent border-[1px] border-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"
				/>
			</div>
			<div class="input-feild flex flex-col">
				<label for="password" class="font-medium"
					>Password <span class="text-red-500">*</span>
				</label>
				<input
					id="password"
					name="password"
					type="password"
					bind:value={password}
					placeholder="Enter your password"
					class="outline-none py-2 px-4 mt-2 rounded-lg bg-transparent border-[1px] border-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"
				/>
			</div>
			<button type="submit" class="bg-indigo-800 py-2 px-1 mt-4 text-slate-200 text-xl rounded-md"
				>Register</button
			>
		</form>
		<p class="mx-auto w-[100%] max-w-[400px] text-center mt-5 mb-10">
			Already having an account ? <a
				href="/login"
				class="font-medium text-indigo-800 underline underline-offset-2">Login here</a
			>
		</p>
	</div>
</section>
