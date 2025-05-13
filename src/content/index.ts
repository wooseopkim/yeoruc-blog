import { createClient, type RTNode, type RTTextNode } from '@prismicio/client';

const repo = 'yeoruc';
const client = createClient(repo);

export interface Post {
  id: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  lang: string;
  data: {
    title: [RTTextNode];
    category: string;
    body: [RTNode, ...RTNode[]];
  };
}

export async function getPosts() {
  const posts = await client.getAllByType('post');
  return posts as unknown as Post[];
}
