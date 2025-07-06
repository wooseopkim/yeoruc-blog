import { loadArticle } from "$lib";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    return {
        article: await loadArticle({ documentId: params.id }),
    };
}
