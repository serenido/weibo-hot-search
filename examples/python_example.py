import os

from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run = client.actor("serenido/weibo-hot-search").call(run_input={
    "maxTopics": 50,
    "compareWithLastRun": True,
    "includeTopPosts": True,
    "topicsWithPosts": 10,
    "postsPerTopic": 5
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
