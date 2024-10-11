<script lang="ts">
	import { NGROK_URL } from '../../stores';
	let ngrokUrl = NGROK_URL;

	// Subscribe to the ngrokUrl store
	NGROK_URL.subscribe((value) => {
		ngrokUrl = value;
   });	
	import LoginImage from '../../lib/components/LoginImage.svelte';
	import SelectGoals from './SelectGoals.svelte';
	import ContentType from './ContentType.svelte';
	import LearningModes from './LearningModes.svelte';
	import Timeframes from './Timeframes.svelte';
	import TimeAvailability from './TimeAvailability.svelte';

	// State management
	let counter = 0; // Counter for screen navigation

	// Onboarding data
	let items = [
		'Introduction to Programming (Python)',
		'Data Structures & Algorithms',
		'SQL and NoSQL Databases',
		'System Design',
		'Object-Oriented Design (OOP)',
		'Operating Systems Concepts',
		'DBMS',
		'Version Control with Git',
		'HTML, CSS, & Web Development Basics',
		'RESTful APIs & Web Services',
		'Cloud Fundamentals',
		'Machine Learning & AI',
		'Microservices Architecture',
		'DevOps & CI/CD Pipelines',
		'Data Science & Analytics',
		'Artificial Intelligence Ethics & Applications',
		'Blockchain Basics',
		'Cybersecurity Fundamentals'
	];
	let selectedItems = []; // Array to hold selected goals

	let contentTypes = []; // Selected content type
	let learningMode = ''; // Selected learning mode
	let timeMode = ''; // Selected time mode (weekly/daily)
	let hours = ''; // Available study hours
	let availableTimeValues = { weekly: [168, 140], daily: [24, 8, 10] }; // Options for time availability
	let timeranges = []; // Array to store selected time ranges for each goal

	// Profile details state
	let name = '';
	let age = 0;
	let location = '';
	let yearsOfExperience = '';
	let currentRole = '';
	let totalAvailableHours = '';
	let timeFrame = '';

	// Fetch user age from localStorage (only in the browser)
	if (typeof window !== 'undefined') {
		age = localStorage.getItem('userAge') || '';
	}

	// Function to submit goals with timeframes
	async function submitGoals() {
		// Check if the environment is browser-based
		if (typeof window === 'undefined') {
			console.error('Window object is not available.');
			return;
		}

		// Retrieve token from localStorage
		const token = localStorage.getItem('token');
		if (!token) {
			console.error('No authorization token found');
			alert('Please log in to proceed');
			window.location.href = '/login';
			return;
		}

		// Define headers and API URL once
		const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
		const apiUrl = `${ngrokUrl}/api/goals`;

		// Create a list of promises for all goal submissions
		const goalPromises = selectedItems.map((goal, index) => {
			const timeRange = timeranges[index];
			if (!timeRange) {
				console.error(`No time range found for goal: ${goal}`);
				return Promise.reject(`No time range selected for goal: ${goal}`);
			}
			const payload = {
				goal,
				startDate:
					new Date(
						Date.UTC(
							timeRange.start.year,
							timeRange.start.month - 1, // Month is 0-indexed in JavaScript
							timeRange.start.day
						)
					) || new Date(),
				endDate:
					new Date(
						Date.UTC(
							timeRange.end.year,
							timeRange.end.month - 1, // Month is 0-indexed in JavaScript
							timeRange.end.day
						)
					) || new Date(),
				priority: 1
			};

			return fetch(apiUrl, {
				method: 'POST',
				headers,
				body: JSON.stringify(payload)
			})
				.then((response) => response.json().then((data) => ({ status: response.status, data })))
				.catch((error) => {
					console.error(`Error submitting goal: ${goal}`, error);
					return { error: `Submission error for goal: ${goal}` };
				});
		});

		try {
			const results = await Promise.all(goalPromises);
			results.forEach((result, index) => {
				if (result.status === 201) {
					console.log(`Goal creation successful: ${selectedItems[index]}`);
				} else {
					console.error(`Goal creation failed: ${result.data?.error || result.error}`);
				}
			});

			alert('All goals processed!');
			// window.location.href = '/onBoarding';
		} catch (error) {
			console.error('Error processing goals:', error);
			alert('Error processing goals. Please try again.');
		}
	}

	// Function to submit preferences (contentType, learningMode, skillLevel)
	async function submitPreferences() {
		// Check if the environment is browser-based
		if (typeof window === 'undefined') {
			console.error('Window object is not available.');
			return;
		}

		// Retrieve token from localStorage
		const token = localStorage.getItem('token');
		if (!token) {
			console.error('No authorization token found');
			alert('Please log in to proceed');
			window.location.href = '/login';
			return;
		}

		// Define headers and API URL
		const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
		const apiUrl = `${ngrokUrl}/api/preferences`;

		// Prepare the payload
		const payload = {
			contentTypes: contentTypes, // Selected content type
			learningMode: learningMode, // Selected learning mode
			skillLevel: 'Beginner' // Chosen skill level (adjusted from the timeMode variable)
		};

		try {
			// Make the API call to submit preferences
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers,
				body: JSON.stringify(payload)
			});

			// Handle response
			const data = await response.json();
			if (response.status === 201) {
				console.log('Preferences created successfully:', data);
				alert('Preferences created successfully');
			} else {
				console.error('Error creating preferences:', data.message);
				alert(`Error creating preferences: ${data.message}`);
			}
		} catch (error) {
			console.error('Error submitting preferences:', error);
			alert('An error occurred while submitting preferences. Please try again.');
		}
	}

	async function submitProfile() {
		// Check if the environment is browser-based
		if (typeof window === 'undefined') {
			console.error('Window object is not available.');
			return;
		}

		// Retrieve token from localStorage
		const token = localStorage.getItem('token');
		if (!token) {
			console.error('No authorization token found');
			alert('Please log in to proceed');
			window.location.href = '/login';
			return;
		}

		name = localStorage.getItem('username');
		age = parseInt(localStorage.getItem('userAge'));
		location = localStorage.getItem('userLocation');
		yearsOfExperience = localStorage.getItem('userExperience');
		currentRole = localStorage.getItem('userRole');

		// Define headers and API URL
		const headers = { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` };
		const apiUrl = `${ngrokUrl}/api/profile`;

		// Prepare the payload
		const payload = {
			name,
			age,
			location,
			yearsOfExperience,
			currentRole,
			totalAvailableHours: hours,
			timeFrame: timeMode
		};
		try {
			// Make the API call to submit preferences
			const response = await fetch(apiUrl, {
				method: 'POST',
				headers,
				body: JSON.stringify(payload)
			});

			// Handle response
			const data = await response.json();
			if (response.status === 201) {
				console.log('Profile created successfully:', data);
				alert('Profile created successfully');
			} else {
				console.error('Error creating Profile:', data.message);
				alert(`Error creating Profile: ${data.message}`);
			}
		} catch (error) {
			console.error('Error submitting Profile:', error);
			alert('An error occurred while submitting Profile. Please try again.');
		}
	}

	// Main submit form function
	async function submitForm() {
		try {
			console.log('Selected Goals:', selectedItems);
			console.log('Content Type:', contentTypes);
			console.log('Learning Mode:', learningMode);
			console.log('Hours:', hours);
			console.log(
				'Profile Data - Name:',
				name,
				'Age:',
				age,
				'Location:',
				location,
				'Years of Experience:',
				yearsOfExperience,
				'Current Role:',
				currentRole,
				'Total Available Hours:',
				totalAvailableHours,
				'Time Frame:',
				timeFrame
			);
			console.log('Selected Time Ranges:', timeranges);

			// Submit goals and timeframes
			await submitGoals();

			// Submit preferences
			await submitPreferences(); // New addition to handle preferences

			await submitProfile();

			alert('Onboarding successful!');

			// After successful onboarding, redirect to dashboard
			// alert('Onboarding successful!');
			// window.location.href = '/dashboard';  // Redirect to dashboard
		} catch (error) {
			console.error('Error occurred during onboarding:', error);
			alert('An error occurred. Please try again.'); // Error handling for fetch failures
		}
	}
</script>

<section class="onBoarding sw-[100vw] container mx-auto flex h-[100vh] p-2 sm:p-4">
	<LoginImage name="On Boarding" />
	<div
		data-lenis-prevent
		class="form-container mx-auto flex w-full flex-col overflow-y-scroll bg-slate-100 px-4 sm:basis-2/3 md:basis-1/2 md:px-10"
	>
		<form
			id="form"
			on:submit|preventDefault={submitForm}
			class="mx-auto mt-10 flex w-[100%] max-w-[400px] flex-col gap-4"
		>
			<div class="header">
				{#if counter == 0}
					<h2
						class="welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl"
					>
						Let's get started
					</h2>
					<h3 class="welcome-text">Set your goals and preferences to begin.</h3>
				{:else}
					<h2
						class="welcome font-mono text-2xl font-semibold tracking-tight text-zinc-700 md:text-3xl"
					>
						Preferences
					</h2>
				{/if}
			</div>

			<!-- Render SelectGoals, ContentType, LearningModes, etc. based on screen (counter value) -->
			{#if counter == 0}
				<SelectGoals bind:items bind:selectedItems />
			{:else if counter == 1}
				<ContentType bind:contentTypes></ContentType>
				<LearningModes bind:learningMode></LearningModes>
				<TimeAvailability bind:timeMode bind:hours bind:availableTimeValues bind:learningMode />
			{:else if counter == 2}
				<Timeframes bind:selectedItems bind:timeranges></Timeframes>
			{/if}

			<div class="btns-container mb-10 flex justify-between">
				<button
					on:click={() => {
						if (counter > 0) {
							counter--;
						}
					}}
					type="button"
					disabled={counter === 0}
					class="mt-4 w-full basis-1/3 rounded-lg border-r-2 bg-indigo-800 px-1 py-2 text-xl text-slate-200 disabled:bg-zinc-500"
					>Back</button
				><button
					on:click={() => {
						if (counter == 2) submitForm();
						else counter++;
					}}
					type="button"
					class="mt-4 w-full basis-1/3 rounded-lg bg-indigo-800 px-1 py-2 text-xl text-slate-200"
					>{counter == 2 ? 'Submit' : 'Next'}</button
				>
			</div>
		</form>
	</div>
</section>

<style>
	.form-container::-webkit-scrollbar {
		width: 7px;
	}

	.form-container::-webkit-scrollbar-track {
		background-color: #e4e4e4;
		border-radius: 100px;
	}

	.form-container::-webkit-scrollbar-thumb {
		border-radius: 100px;
		border: 6px solid rgba(0, 0, 0, 0.18);
		border-left: 0;
		border-right: 0;
		background-color: #8070d4;
	}
</style>
