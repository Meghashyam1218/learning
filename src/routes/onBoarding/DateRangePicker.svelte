<script lang="ts">
	import { cn, flyAndScale } from '$lib/utils';
	import { DateRangePicker, type DateRange } from 'bits-ui';
	export let value: DateRange | undefined = undefined;
</script>

<DateRangePicker.Root bind:value weekdayFormat="short" fixedWeeks={true}>
	<div class="flex flex-col gap-1.5 rounded-md">
		<DateRangePicker.Input
			let:segments
			class="h-input rounded-input border-border-input focus-within:border-border-input-hover focus-within:shadow-date-field-focus hover:border-border-input-hover flex select-none  items-center justify-evenly rounded-md border-[1px] border-zinc-700 px-2  py-3 text-sm tracking-[0.01em] text-foreground outline-indigo-700 focus-within:border-transparent focus-within:outline"
		>
			{#each segments.start as { part, value }}
				<div class="inline-block select-none">
					{#if part === 'literal'}
						<DateRangePicker.Segment type="start" {part} class="p-1 text-muted-foreground">
							{value}
						</DateRangePicker.Segment>
					{:else}
						<DateRangePicker.Segment
							type="start"
							{part}
							class="rounded-5px  px-1 py-1  focus:text-foreground focus-visible:!ring-0 focus-visible:!ring-offset-0 aria-[valuetext=Empty]:text-muted-foreground"
						>
							{value}
						</DateRangePicker.Segment>
					{/if}
				</div>
			{/each}
			<div aria-hidden class="px-1 text-muted-foreground">–</div>
			{#each segments.end as { part, value }}
				<div class="inline-block select-none">
					{#if part === 'literal'}
						<DateRangePicker.Segment type="end" {part} class="p-1 text-muted-foreground">
							{value}
						</DateRangePicker.Segment>
					{:else}
						<DateRangePicker.Segment
							type="end"
							{part}
							class="rounded-5px px-1 py-1  focus:text-foreground focus-visible:!ring-0 focus-visible:!ring-offset-0 aria-[valuetext=Empty]:text-muted-foreground"
						>
							{value}
						</DateRangePicker.Segment>
					{/if}
				</div>
			{/each}
			<DateRangePicker.Trigger
				class="active:bg-dark-10  inline-flex size-8 items-center justify-center rounded-[5px] text-foreground/60 transition-all hover:bg-muted"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="1em"
					height="1em"
					fill="currentColor"
					viewBox="0 0 256 256"
					class="size-6"
					><rect width="256" height="256" fill="none"></rect><path
						d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"
					></path></svg
				>
			</DateRangePicker.Trigger>
		</DateRangePicker.Input>
		<DateRangePicker.Content sideOffset={6} transition={flyAndScale} class="z-50">
			<DateRangePicker.Calendar
				class="rounded-15px border-dark-10 mt-6 border bg-background p-[22px] shadow-popover"
				let:months
				let:weekdays
			>
				<DateRangePicker.Header class="flex items-center justify-between">
					<DateRangePicker.PrevButton
						class="rounded-9px active:scale-98 inline-flex size-10 items-center justify-center bg-background transition-all hover:bg-muted"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							fill="currentColor"
							viewBox="0 0 256 256"
							class="size-6"
							><rect width="256" height="256" fill="none"></rect><path
								d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"
							></path></svg
						>
					</DateRangePicker.PrevButton>
					<DateRangePicker.Heading class="text-[15px] font-medium" />
					<DateRangePicker.NextButton
						class="rounded-9px active:scale-98 inline-flex size-10 items-center justify-center bg-background transition-all hover:bg-muted"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="1em"
							height="1em"
							fill="currentColor"
							viewBox="0 0 256 256"
							class="size-6"
							><rect width="256" height="256" fill="none"></rect><path
								d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"
							></path></svg
						>
					</DateRangePicker.NextButton>
				</DateRangePicker.Header>
				<div class="flex flex-col space-y-4 pt-4 sm:flex-row sm:space-x-4 sm:space-y-0">
					{#each months as month}
						<DateRangePicker.Grid class="w-full border-collapse select-none space-y-1">
							<DateRangePicker.GridHead>
								<DateRangePicker.GridRow class="mb-1 flex w-full justify-between">
									{#each weekdays as day}
										<DateRangePicker.HeadCell
											class="w-10 rounded-md text-xs !font-normal text-muted-foreground"
										>
											<div>{day.slice(0, 2)}</div>
										</DateRangePicker.HeadCell>
									{/each}
								</DateRangePicker.GridRow>
							</DateRangePicker.GridHead>
							<DateRangePicker.GridBody>
								{#each month.weeks as weekDates}
									<DateRangePicker.GridRow class="flex w-full">
										{#each weekDates as date}
											<DateRangePicker.Cell
												{date}
												class="relative m-0 size-10 overflow-visible !p-0 text-center text-sm focus-within:relative focus-within:z-20"
											>
												<DateRangePicker.Day
													{date}
													month={month.value}
													class={cn(
														'rounded-9px data-[selection-end]:rounded-9px data-[selection-start]:rounded-9px group relative inline-flex size-10 items-center justify-center overflow-visible whitespace-nowrap border border-transparent bg-background bg-transparent p-0 text-sm font-normal text-foreground  transition-all hover:border-foreground focus-visible:!ring-foreground data-[disabled]:pointer-events-none data-[outside-month]:pointer-events-none data-[highlighted]:rounded-none data-[highlighted]:bg-muted data-[selected]:bg-muted data-[selection-end]:bg-foreground data-[selection-start]:bg-foreground data-[selected]:font-medium data-[selection-end]:font-medium data-[selection-start]:font-medium data-[disabled]:text-foreground/30 data-[selected]:text-foreground data-[selection-end]:text-background data-[selection-start]:text-background data-[unavailable]:text-muted-foreground data-[unavailable]:line-through data-[selection-start]:focus-visible:ring-2 data-[selection-start]:focus-visible:!ring-offset-2 data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:rounded-none data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:border-foreground data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:!ring-0 data-[selected]:[&:not([data-selection-start])]:[&:not([data-selection-end])]:focus-visible:!ring-offset-0'
													)}
												>
													<div
														class="absolute top-[5px] hidden size-1 rounded-full bg-foreground transition-all group-data-[today]:block group-data-[selected]:bg-background"
													/>
													{date.day}
												</DateRangePicker.Day>
											</DateRangePicker.Cell>
										{/each}
									</DateRangePicker.GridRow>
								{/each}
							</DateRangePicker.GridBody>
						</DateRangePicker.Grid>
					{/each}
				</div>
			</DateRangePicker.Calendar>
		</DateRangePicker.Content>
	</div>
</DateRangePicker.Root>
