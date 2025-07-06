interface ImageFile {
    id: number;
    documentId: string;
    mime: `image/${string}`;
    name: string;
    alternativeText: string;
    caption: string;
    width: number;
    height: number;
    formats: {
        large: { url: string; width: number; height: number; },
        medium: { url: string; width: number; height: number; },
        small: { url: string; width: number; height: number; },
        thumbnail: { url: string; width: number; height: number; },
    };
    url: string;
}

export interface Article {
    id: number;
    documentId: string;
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: ImageFile;
    category: {
        id: number;
        documentId: string;
        name: string;
        slug: string;
        description: string | null;
        articles: {
            id: number;
            documentId: string;
            title: string;
        }[];
    };
    body: string;
};

export async function loadPosts() {
    const res = await fetch('https://fantastic-friend-926e1365b1.strapiapp.com/api/articles?populate=*');
    const data: {
        data: Article[];
    } = await res.json();
    return { body: data };
}

export async function loadPost({ documentId }: { documentId: string; }) {
    const res = await fetch(`https://fantastic-friend-926e1365b1.strapiapp.com/api/articles/${documentId}?populate=*`);
    const data: {
        data: Article;
    } = await res.json();
    return { body: data };
}
