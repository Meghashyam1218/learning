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
		const formData = { name, email, password, age, countryCode, phoneNumber };
		console.log('Form submitted with:', formData);

		try {
			const response = await fetch('/registerUser', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (response.ok) {
				// Redirect based on server response
				if (result.onboarding) {
					window.location.href = '/onboarding';
				} else {
					window.location.href = '/dashboard';
				}
			} else {
				console.error('Registration failed', result.message);
				alert(result.message); // Display error message
			}
		} catch (error) {
			console.error('Error occurred:', error);
			alert('An error occurred. Please try again.');
		}
		window.location.href = '/onBoarding';
	}
</script>

<section class="login container mx-auto flex min-h-[100vh] w-[100vw] rounded-md p-4">
	<LoginImage name="Register"></LoginImage>
	<div
		class="form-container mx-auto flex flex-col justify-center bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10"
	>
		<form
			method="POST"
			on:submit|preventDefault={registerUser}
			class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"
		>
			<div class="header">
				<h2 class="welcome font-mono text-4xl font-semibold tracking-tight text-zinc-700">
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
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
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
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
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
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
				/>
			</div>
			<button type="submit" class="mt-4 rounded-md bg-indigo-800 px-1 py-2 text-xl text-slate-200"
				>Register</button
			>
		</form>
		<p class="mx-auto mb-10 mt-5 w-[100%] max-w-[400px] text-center">
			Already having an account ? <a
				href="/login"
				class="font-medium text-indigo-800 underline underline-offset-2">Login here</a
			>
		</p>
	</div>
</section>
