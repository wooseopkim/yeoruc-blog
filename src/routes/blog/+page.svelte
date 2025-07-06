<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<ul>
	{#each data.articles.body.data as post}
		<section>
			<a href={`/blog/${post.documentId}`}>{post.title}</a>
		</section>
	{/each}
</ul>
