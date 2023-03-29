<script>
	// @ts-nocheck

	export let charts = [
		{ percent: 95,  title: 'React' },
		{ percent: 90,  title: 'React Native' },
		{ percent: 90,  title: 'HTML, CSS' },
		{ percent: 90,  title: 'Javascript' },
		{ percent: 90,  title: 'TypeScript' },
		{ percent: 80,  title: 'Node' },
		{ percent: 80,  title: 'AWS' },
		{ percent: 60,  title: 'Mongo' },

		{ percent: 70,  title: 'Docker' },
		{ percent: 90,  title: 'UI/UX Design' },
		{ percent: 80,  title: 'Design Patterns' },
		{ percent: 80,  title: 'Next.js' },
		{ percent: 75,  title: 'Solidity-Blockchain' },
		{ percent: 45,  title: 'Svelte' },
		{ percent: 30,  title: 'Rust' },
		{ percent: 90,  title: 'Communication Skills' },
		{ percent: 95,  title: 'Team work' }
	];
</script>

{#each charts as chart, i}
	<div class="mkCharts flex flex-col items-center w-[8rem] text-center my-5">
		<svg
			class="mkc_circle-chart"
			viewbox="0 0 36 36"
			width="80"
			height="80"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				class="mkc_circle-bg"
				stroke="#F2E4D0"
				stroke-width={2 * 0.5}
				fill="none"
				d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
			/>
			<path
				class="mkc_circle"
				stroke={'#1B4A74'}
				stroke-width={2}
				stroke-dasharray="{chart.percent},100"
				stroke-linecap="round"
				fill="none"
				d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
			/>
			<text
				class="mkc_info text-third"
				x="50%"
				y="50%"
				alignment-baseline="central"
				text-anchor="middle"
				font-size="8">{chart.percent}%</text
			>
		</svg>
		<p class="font-sfprorounded w-fit text-third text-[18px]">{chart.title}</p>
	</div>
{/each}
