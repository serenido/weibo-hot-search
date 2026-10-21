import { ApifyClient } from "apify-client";

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const run = await client.actor("serenido/weibo-hot-search").call({
    "maxTopics": 50,
    "compareWithLastRun": true,
    "includeTopPosts": true,
    "topicsWithPosts": 10,
    "postsPerTopic": 5
});

const { items } = await client.dataset(run.defaultDatasetId).listItems();
console.log(items);
