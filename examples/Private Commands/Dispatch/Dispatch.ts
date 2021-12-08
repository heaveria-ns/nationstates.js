/**
 * TypeScript Example -- Dispatch
 */
import {API, Bulletin, Category, Dispatch, Factbook, Mode} from "../../../API";

// Instantiate one API object to ensure rate limit and user agent is set correctly.
const api = new API('user-agent');

examples();

/* ---- Examples ---- */
async function examples() {
    /**
     * Example 1: Creating a new dispatch
     */
    await new Dispatch(api, 'nation', 'password', Mode.add)
        .title('Cool Title!')
        .text('Hello World!')
        .category(Category.factbook)
        .subcategory(Factbook.legislation)
        .executeAsync();

    /**
     * Example 2: Removing a dispatch
     */
    await new Dispatch(api, 'nation', 'password', Mode.remove)
        .dispatchID(12345)
        .executeAsync();

    /**
     * Example 3: Editing a dispatch
     */
    await new Dispatch(api, 'nation', 'password', Mode.edit)
        .dispatchID(1630710)
        .title('Edited Title')
        .text('Hello World!')
        .category(Category.bulletin)
        .subcategory(Bulletin.news)
        .executeAsync();
}
