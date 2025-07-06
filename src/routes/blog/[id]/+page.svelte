<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
	let article = data.article.body.data;
</script>

<article>
	<header>
		<img
			srcset={Object.values(article.cover.formats)
				.sort((a, b) => b.width - a.width)
				.map((x) => `${x.url} ${x.width}w`)
				.join(', ')}
			src={article.cover.url}
			alt={article.cover.alternativeText}
		/>

		<h1>{article.title}</h1>
		<p>{article.description}</p>

		<section>{article.publishedAt}</section>
		<section>{article.updatedAt}</section>
	</header>

	<main>
		{@html article.body}
	</main>
</article>

<style scoped>
	article {
		width: 100%;
	}

	article :global(img) {
		max-width: 100%;
		height: unset;
	}
</style>
