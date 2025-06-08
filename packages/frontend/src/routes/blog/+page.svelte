<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<ul>
	{#each data.articles.body.data as post}
		<li>
			<pre>{JSON.stringify(post, null, 2)}</pre>
		</li>
	{/each}
</ul>
