<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<ul>
	{#each data.articles.body.data as article}
		<section>
			<a href={`/${article.documentId}`}>{article.title}</a>
		</section>
	{/each}
</ul>
