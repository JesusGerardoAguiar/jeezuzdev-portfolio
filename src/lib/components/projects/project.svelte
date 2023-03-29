<script>
	import illus from '$lib/assets/hero/illus.png';
    export let text = "";
    export let title ="";
    export let image = "";
    /**
	 * @type {never[]}
	 */
     export let links=[];
    export let direction = true;
</script>


		
		<div class={` flex ${direction ? "flex-row" : "flex-row-reverse"} items-center justify-between `}>
			<div class="w-[50%]">
				<h2 class="font-sfprorounded text-secondary text-[54px] md:text-[35px] mb-5">{title}</h2>
				<p>
					{text}
				</p>
                <h3 class="font-sfprorounded text-secondary text-[24px] md:text-[15px] mt-5">You can learn more about it in the following links</h3>
			</div>
			<img src={image} />
		</div>

