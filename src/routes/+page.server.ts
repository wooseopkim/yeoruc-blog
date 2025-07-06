import { loadArticles } from "$lib";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
    return {
        articles: await loadArticles(),
    };
}
