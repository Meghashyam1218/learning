<script>
	const ngrokURL = import.meta.env.NGROK_URL;
	import Seperator from './Seperator.svelte';
	import LoginImage from '../../lib/components/LoginImage.svelte';
	let email = '';
	let password = '';
	let rememberMe = false;

	async function loginUser() {
		// Create payload for login request
		const payload = {
			email,
			password
		};

		try {
			// Send POST request to login API
			const response = await fetch('{ngrokURL}/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(payload)
			});

			// Parse JSON response
			const result = await response.json();

			if (response.status === 201) {
				// Login successful, save token in localStorage
				localStorage.setItem('token', result.token);

				// Optional: Redirect to onboarding page or dashboard
				window.location.href = '/onBoarding';
			} else {
				// Handle login failure
				alert(`Login failed: ${result.message}`);
				console.error('Login error:', result.message);
			}
		} catch (error) {
			// Handle network or server errors
			console.error('Error logging in:', error);
			alert('An error occurred. Please try again later.');
		}
	}
</script>

<section class="login container mx-auto flex min-h-[100vh] w-[100vw] rounded-md p-4">
	<LoginImage name="Login" />
	<div class="form-container mx-auto flex flex-col justify-center bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10">
		<form on:submit|preventDefault={loginUser} class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4">
			<div class="header">
				<h2 class="welcome font-mono text-4xl font-semibold tracking-tight text-zinc-700">Welcome Back!</h2>
				<h3 class="welcome-text">Your gateway to knowledge starts here.</h3>
			</div>
			<div class="input-field mt-2 flex flex-col">
				<label for="email" class="font-medium">Email <span class="text-red-500">*</span> </label>
				<input
					id="email"
					name="email"
					type="email"
					bind:value={email}
					placeholder="Enter your email"
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
					required
				/>
			</div>
			<div class="input-field flex flex-col">
				<label for="password" class="font-medium">Password <span class="text-red-500">*</span></label>
				<input
					id="password"
					name="password"
					type="password"
					bind:value={password}
					placeholder="Enter your password"
					class="mt-2 rounded-lg border-[1px] border-zinc-800 bg-transparent px-4 py-2 tracking-wide outline-none focus:border-transparent focus:outline-indigo-900"
					required
				/>
			</div>

			<div class="flex justify-between">
				<div class="custom-checkbox">
					<input type="checkbox" bind:checked={rememberMe} id="checkbox1" />
					<label for="checkbox1" class="font-medium text-indigo-800">Remember Me</label>
				</div>
				<a href="/reset" class="font-medium text-indigo-800">Forgot Password?</a>
			</div>
			<button type="submit" class="rounded-md bg-indigo-800 px-1 py-2 text-xl text-slate-200">Log In</button>
		</form>
		<br />
		<Seperator />
		<br />
		<button
			type="button"
			class="mx-auto flex w-[100%] max-w-[400px] items-center justify-center gap-2 rounded-md border-[1px] border-zinc-600 px-1 py-2 text-xl text-indigo-900"
		>
			<svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"><path
				d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
				fill="#ffc107"
			/><path
				d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
				fill="#ff3d00"
			/><path
				d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
				fill="#4caf50"
			/><path
				d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
				fill="#1976d2"
			/></svg
		>
			<p>Sign up with Google</p>
		</button>
		<p class="mx-auto mb-10 mt-5 w-[100%] max-w-[400px] text-center">
			Don't have an account? <a href="/register" class="font-medium text-indigo-800 underline underline-offset-2">Register here</a>
		</p>
	</div>
</section>

<style>
	/* .login-img-text {
		writing-mode: vertical-lr;
		text-orientation: upright;
	} */
	/* Hide the default checkbox */
	/* Hide the default checkbox */
	.custom-checkbox input[type='checkbox'] {
		display: none;
	}

	/* Create a custom checkbox */
	.custom-checkbox label {
		position: relative;
		padding-left: 30px;
		cursor: pointer;
		font-size: 16px;
	}

	/* Style for the checkbox box */
	.custom-checkbox label::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 20px;
		height: 20px;
		border: 1px solid #333;
		border-radius: 3px;
		background-color: transparent;
	}

	/* Style for the checked state */
	.custom-checkbox input[type='checkbox']:checked + label::before {
		background-color: #4e4caf;
		border-color: #4c63af;
	}

	/* Checkmark for checked state */
	.custom-checkbox label::after {
		content: '';
		position: absolute;
		left: 6px;
		top: 2px;
		width: 8px;
		height: 14px;
		border: solid white;
		border-width: 0 2px 2px 0;
		transform: rotate(45deg);
		opacity: 0;
	}

	/* Show the checkmark when checked */
	.custom-checkbox input[type='checkbox']:checked + label::after {
		opacity: 1;
	}
</style>