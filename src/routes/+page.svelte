<script lang="ts">
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();
</script>

<main>
	<ul>
		{#each data.articles.body.data as article}
			<li>
				<a href={`/${article.documentId}`}>
					<img
						srcset={Object.values(article.cover.formats)
							.sort((a, b) => b.width - a.width)
							.map((x) => `${x.url} ${x.width}w`)
							.join(', ')}
						src={article.cover.url}
						alt={article.cover.alternativeText}
						style:width="16rem"
						style:height={`calc(${article.cover.height} / ${article.cover.width} * 16rem)`}
					/>
					<section>
						<h3>
							{article.title}
						</h3>
						<p>{article.description}</p>
						<time>{new Date(Date.parse(article.publishedAt)).toLocaleString()}</time>
					</section>
				</a>
			</li>
		{/each}
	</ul>
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	ul {
		max-width: 80vmin;
		padding: 0;
		margin-block-start: 4rem;
		margin-block-end: 16rem;
	}

	li::marker {
		content: '';
	}

	li {
		&:not(:first-of-type) {
			margin-block-start: 1rem;
		}
	}

	a {
		text-decoration: none;
		color: unset;
		display: flex;
		padding-inline: 0.75rem;
		padding-block: 0.75rem;

		&:hover {
			background-color: rgba(0, 0, 0, 0.1);
		}
	}

	li section {
		padding-inline-start: 1rem;
		padding-block: 0.25rem;
		display: flex;
		flex-direction: column;

		& :is(h3, p) {
			margin: 0;
		}

		& p {
			flex-grow: 1;
		}

		& h3 ~ * {
			margin-block-start: 1rem;
			opacity: 0.7;
		}
	}
</style>
