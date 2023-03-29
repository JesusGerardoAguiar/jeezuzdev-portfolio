<script>
	import ihavebuilt from '$lib/assets/projects/1.jpg';
	import ihavework from '$lib/assets/projects/2.jpg';
</script>

<div class="flex flex-row flex-wrap lg:flex-nowrap">
	<a href="/projects" class="w-[100%]">
		<div
			class="w-[100%] flex flex-row justify-center items-center text-center py-32 hover:cursor-pointer hover:opacity-[0.8] hover:transition"
			style={`background-image: url(${ihavebuilt}); background-position: center center;
    background-repeat: no-repeat; background-size: cover;`}
		>
			<p class="font-sfprorounded text-white text-[54px] md:text-[35px] sm:text-[28px]">
				Check out <br />
				what I’ve built
			</p>
		</div>
	</a>

	<a href="/works"  class="w-[100%]">
		<div
			class="w-[100%] flex flex-row justify-center items-center text-center py-32 hover:cursor-pointer hover:opacity-[0.8] hover:transition"
			style={`background-image: url(${ihavework}); background-position: center center;
    background-repeat: no-repeat; background-size: cover;`}
		>
			<p class="font-sfprorounded text-white text-[54px] md:text-[35px] sm:text-[28px]">
				Check out the <br />
				projects I have work
			</p>
		</div>
	</a>
</div>
