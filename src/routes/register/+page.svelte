<script>
	import { NGROK_URL } from '../../stores';
	let ngrokUrl = NGROK_URL;

	// Subscribe to the ngrokUrl store
	NGROK_URL.subscribe((value) => {
		ngrokUrl = value;
   });	
   	$: console.log(ngrokUrl);
	import LoginImage from '../../lib/components/LoginImage.svelte';

	import Age from './Age.svelte';
	import Location from './Location.svelte';
	import Yoe from './Yoe.svelte';
	import CurrentRole from './CurrentRole.svelte';
	import Phone from './phone.svelte';
	let age = 18;
	let username = '';
	let email = '';
	let password = '';
	let countryCode = '+91';
	let phoneNumber = '';
	let location = 'Kolkata';
	let experience = '<2';
	let currentRole = 'Full-Stack Developer';

	async function registerUser() {
		// Handle form submission logic here
		const formData = {
			username,
			email,
			password,
			mob: countryCode + phoneNumber,
			age
		};
		console.log('Form submitted with:', formData);

		try {
			const response = await fetch('${ngrokUrl}/api/auth/register', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});

			const result = await response.json();

			if (response.status === 201) {
				const loginData = { email: formData.email, password: formData.password };

				// Step 2: Auto-login after successful registration
				const loginResponse = await fetch(
					'${ngrokUrl}/api/auth/login',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify(loginData)
					}
				);

				const loginResult = await loginResponse.json();
				if (loginResponse.status == 201 && loginResult.token) {
					// Step 3: Store JWT token securely (e.g., in localStorage or a cookie)
					if (typeof window !== 'undefined') {
						localStorage.setItem('token', loginResult.token);
						localStorage.setItem('username', username);
						localStorage.setItem('userAge', age);
						localStorage.setItem('userLocation', location);
						localStorage.setItem('userExperience', experience);
						localStorage.setItem('userRole', currentRole);
					}
					console.log('Registration successful:', result.message);
					alert('Registration successful! Redirecting to onboarding...');
					window.location.href = '/onBoarding';
				} else {
					console.error('Login failed:', loginResult.error);
					alert(`Login failed: ${loginResult.message}`);
				}
			} else {
				console.error('Registration failed:', result.error);
				alert(`Registration failed: ${result.message}`);
			}
		} catch (error) {
			console.error('Error occurred:', error);
			alert('An error occurred. Please try again.');
		}
	}
</script>

<section class="login container mx-auto flex min-h-[100vh] w-[100vw] rounded-md p-4">
	<LoginImage name="Register" />
	<div
		class="form-container mx-auto flex flex-col justify-center bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10"
	>
		<form
			on:submit|preventDefault={registerUser}
			class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"
		>
			<div class="header">
				<h2 class="welcome font-mono text-4xl font-semibold tracking-tight text-zinc-700">
					Welcome!
				</h2>
				<h3 class="welcome-text">Your gateway to knowledge starts here.</h3>
			</div>
			<div class="input-field mt-2 flex flex-col">
				<label for="username" class="font-medium"
					>Username <span class="text-red-500">*</span></label
				>
				<input
					id="username"
					name="username"
					type="text"
					bind:value={username}
					placeholder="Enter your username"
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
				/>
			</div>
			<div class="input-field flex flex-col">
				<label for="email" class="font-medium">Email <span class="text-red-500">*</span></label>
				<input
					id="email"
					name="email"
					type="email"
					bind:value={email}
					placeholder="Enter your email address"
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
				/>
			</div>
			<div class="input-field flex flex-col">
				<label for="password" class="font-medium"
					>Password <span class="text-red-500">*</span></label
				>
				<input
					id="password"
					name="password"
					type="password"
					bind:value={password}
					placeholder="Enter your password"
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
				/>
			</div>
			<Age bind:age />
			<Phone bind:countryCode bind:phoneNumber />
			<Location bind:location />
			<Yoe bind:experience />
			<CurrentRole bind:currentRole />
			<button type="submit" class="mt-4 rounded-md bg-indigo-800 px-1 py-2 text-xl text-slate-200"
				>Register</button
			>
		</form>
		<p class="mx-auto mb-10 mt-5 w-[100%] max-w-[400px] text-center">
			Already have an account? <a
				href="/login"
				class="font-medium text-indigo-800 underline underline-offset-2">Login here</a
			>
		</p>
	</div>
</section>
