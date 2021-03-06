/**
 * TypeScript Example -- PrivateRequestBuilder
 */

import {Client, NationPrivate, PrivateRequestBuilder} from "../../API";

// Instantiate one client object to ensure rate limit and user agent is set correctly.
const client = new Client('user-agent');

examples();

/* ---- Examples ---- */
async function examples() {
    /**
     * 1. Retrieve issues and nextissue for Testlandia
     * 2. Authenticate (await) NOTE: Important to be done before building request!
     * 4. Build request (add nation & shards)
     * 5. Send request (await)
     * 6. Convert request to JS object. (await)
     * 7. Log results.
     */

    // Instantiate a PrivateRequestBuilder and authenticate
    const request = await new PrivateRequestBuilder(client).authenticate('testlandia', 'password')

    // Build request
    request
        .addNation('testlandia')
        .addShards([NationPrivate.issues, NationPrivate.nextissue]);


    // Await request
    await request.execute();

    // Convert request to JS object (use firstRequest.body to get original XML response body)
    await request.toJS();

    console.log(request.js['issues'], request.js['nextissue']);
}

