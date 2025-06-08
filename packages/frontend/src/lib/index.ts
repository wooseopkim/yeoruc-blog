export async function loadPosts() {
    const res = await fetch('http://inspiring-dawn-abf8c51535.strapiapp.com/api/articles?populate=*');
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
    console.log(data);
    return { body: data };
}
