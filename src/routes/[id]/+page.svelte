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
			style:height={`calc(${article.cover.height} / ${article.cover.width} * 100vw)`}
		/>

		<section>
			<h1>{article.title}</h1>
			<p>{article.description}</p>

			<time><span>발행 {article.publishedAt}</span></time>
			<time><span>수정 {article.updatedAt}</span></time>
		</section>
	</header>

	<main>
		{@html article.body}
	</main>
</article>

<style scoped>
	article {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	article :global(img) {
		max-width: 100%;
		height: unset;
	}

	header {
		position: relative;
		font-size: 1.5em;
		width: 100%;
		background-color: lightgrey;

		& > img {
			backdrop-filter: brightness(0.1) opacity(0.5);
			background-color: rgba(0, 0, 0, 0.7);
		}

		& > img + section {
			background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 1));
			color: rgba(255, 255, 255, 0.9);
		}
	}

	header > section {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		padding-inline: 2rem;
		padding-block: 2rem;
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;

		& > h1 {
			margin-block-start: 0;
			margin-block-end: 0.5rem;
		}
		& > p {
			margin-block-start: 0;
			margin-block-end: 2rem;
			font-size: 0.65em;
		}

		& > time {
			font-size: 0.65em;
		}
	}

	main {
		margin-block-start: 4rem;
		margin-block-end: 16rem;
		max-width: 50vmin;

		& > :global(p) {
			margin-block: 2.5rem;

			& > :global(span[style*='background-color:']) {
				padding-inline: 0.5rem;
				padding-block: 0.25rem;
			}
		}

		& > :global(blockquote) {
			background-color: rgba(128, 96, 32, 0.3);
			margin: 0;
			padding-inline: 2rem;
			padding-block: 1rem;
			font-family: serif;

			& > :global(p:first-child::before) {
				content: '“';
				margin-inline-end: 0.5em;
			}
			& > :global(p:last-child::after) {
				content: '”';
				margin-inline-start: 0.5em;
			}
		}
	}
</style>
