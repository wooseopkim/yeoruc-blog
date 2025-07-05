export async function loadPosts() {
    const res = await fetch('https://fantastic-friend-926e1365b1.strapiapp.com/api/articles?populate=*');
    const data: {
        data: {
            id: number;
            documentId: string;
            title: string;
            description: string;
            slug: string;
            createdAt: string;
            updatedAt: string;
            publishedAt: string;
        }[];
    } = await res.json();
    return { body: data };
}
