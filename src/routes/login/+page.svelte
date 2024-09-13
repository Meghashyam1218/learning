<script>
	import Seperator from './Seperator.svelte';
	import LoginImage from '../../lib/components/LoginImage.svelte';
	let email = '';
	let password = '';
	let rememberMe = false;
</script>

<section class="login container mx-auto rounded-md w-[100vw] min-h-[100vh] p-4 flex">
	<LoginImage name="Login" />
	<div
		class="login-left bg-slate-100 sm:basis-2/3 md:basis-1/2 px-10 flex flex-col justify-center mx-auto"
	>
		<form
			method="POST"
			on:submit={() => {}}
			class="mt-10 flex flex-col gap-4 mx-auto w-[100%] max-w-[400px]"
		>
			<div class="header">
				<h2 class="welcome font-semibold text-4xl font-mono text-zinc-700 tracking-tight">
					Welcome Back!
				</h2>
				<h3 class="welcome-text">Your gateway to knowledge starts here.</h3>
			</div>
			<div class="input-feild mt-2 flex flex-col">
				<label for="email" class="font-medium">Email <span class="text-red-500">*</span> </label>
				<input
					id="email"
					name="email"
					type="text"
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
					type="text"
					bind:value={password}
					placeholder="Enter your password"
					class="outline-none py-2 px-4 mt-2 rounded-lg bg-transparent border-[1px] border-zinc-800 focus:border-transparent focus:outline-indigo-900 tracking-wide"
				/>
			</div>

			<div class="flex justify-between">
				<div class="custom-checkbox">
					<input type="checkbox" bind:checked={rememberMe} id="checkbox1" />
					<label for="checkbox1" class="text-indigo-800 font-medium">Remember Me</label>
				</div>
				<a href="/reset" class="text-indigo-800 font-medium">Forgot Password?</a>
			</div>
			<button type="submit" class="bg-indigo-800 py-2 px-1 text-slate-200 text-xl rounded-md"
				>Log In</button
			>
		</form>
		<br />
		<Seperator />
		<br />
		<button
			type="button"
			class="border-zinc-600 flex items-center justify-center gap-2 border-[1px] py-2 text-indigo-900 px-1 text-xl rounded-md mx-auto w-[100%] max-w-[400px]"
			><svg height="24" viewBox="0 0 48 48" width="24" xmlns="http://www.w3.org/2000/svg"
				><path
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
			<p>Sign up with Google</p></button
		>
		<p class="mx-auto w-[100%] max-w-[400px] text-center mt-5 mb-10">
			Don't have an account ? <a
				href="/register"
				class="font-medium text-indigo-800 underline underline-offset-2">Register here</a
			>
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
