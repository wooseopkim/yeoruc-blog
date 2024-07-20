import { createClient } from '@prismicio/client';

const repo = 'yeoruc';
const client = createClient(repo);

export interface Post {
  uid: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  slugs: string[];
  lang: string;
  data: {
    title: [{
      text: string;
    }];
    category: string;
    body: {
      type: string;
      text: string;
      spans: {
        start: number;
        end: number;
        type: string;
        data?: Record<string, any>;
      }[];
    }[];
  };
}

export async function getPosts() {
  const posts = await client.getAllByType('post');
  return posts as unknown as Post[];
}
