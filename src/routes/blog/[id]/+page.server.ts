import { loadPost } from "$lib";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params }) => {
    return {
        post: await loadPost({ documentId: params.id }),
    };
}
