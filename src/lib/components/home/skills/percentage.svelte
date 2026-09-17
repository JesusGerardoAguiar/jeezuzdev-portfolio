<script>
	// @ts-nocheck

	export let charts = [
		{ percent: 90,  title: 'TypeScript' },
		{ percent: 90,  title: 'Node.js' },
		{ percent: 88,  title: 'React' },
		{ percent: 90,  title: 'Engineering Leadership' },
		{ percent: 85,  title: 'Technical Recruiting' },
		{ percent: 85,  title: 'Performance Management' },
		{ percent: 80,  title: 'PostgreSQL' },
		{ percent: 82,  title: 'AWS' },
		{ percent: 80,  title: 'Production Incident Response' },
		{ percent: 85,  title: 'AI-Assisted Development' },
		{ percent: 75,  title: 'Docker & CI/CD' },
		{ percent: 70,  title: 'GraphQL' },
		{ percent: 65,  title: 'AWS CDK (IaC)' },
		{ percent: 60,  title: 'MongoDB' },
		{ percent: 45,  title: 'Svelte' },
		{ percent: 92,  title: 'Communication Skills' },
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
