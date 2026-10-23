# Weibo Hot Search API (微博热搜)

Get the live Weibo hot search list (微博热搜) as clean JSON: rank, keyword, heat and label, what changed since your last run (new topics, rank and heat moves), and optional top posts per topic. No login.

Runs in the cloud on Apify. No servers, no proxy setup, no code to maintain. **[Open it on Apify](https://apify.com/serenido/weibo-hot-search)**

**Price:** $2 per 1,000 rows. No monthly fee. Apify's free plan gives $5 of usage every month, no credit card needed. [Current price](https://apify.com/serenido/weibo-hot-search/pricing).

## What you get

- About 50 trending topics per run with rank, heat and label (hot, new, boiling, exploding, pinned)
- isNew, previousRank, rankChange and heatChange against your previous run: schedule it hourly for a trend tracker
- Optional top posts behind each hot topic: text, author, followers, likes, reposts, comments, images, video
- Paid placements in the list are skipped and never charged

## Quick start: Python

```bash
pip install apify-client
```

```python
from apify_client import ApifyClient

client = ApifyClient("YOUR_APIFY_TOKEN")

run = client.actor("serenido/weibo-hot-search").call(run_input={
    "maxTopics": 50,
    "compareWithLastRun": True,
    "includeTopPosts": True,
    "topicsWithPosts": 10,
    "postsPerTopic": 5
})

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
```

## Quick start: JavaScript (Node.js)

```bash
npm install apify-client
```

```javascript
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
```

## Quick start: one HTTP call

Runs the tool and returns the rows in one request. Good for runs under 5 minutes; for bigger runs use the Python or JavaScript example.

```bash
curl -X POST "https://api.apify.com/v2/acts/serenido~weibo-hot-search/run-sync-get-dataset-items?token=$APIFY_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"maxTopics": 50, "compareWithLastRun": true, "includeTopPosts": true, "topicsWithPosts": 10, "postsPerTopic": 5}'
```

Get your token in [Apify Console > Settings > API & Integrations](https://console.apify.com/settings/integrations).

## Use it from AI apps (MCP)

Any app that supports remote MCP servers (Claude, ChatGPT, Cursor, VS Code and others) can run this tool for you. Add this server URL: `https://mcp.apify.com?tools=serenido/weibo-hot-search`. Your Apify account connects on first use. Example config for Cursor:

```json
{
  "mcpServers": {
    "apify": {
      "url": "https://mcp.apify.com?tools=serenido/weibo-hot-search"
    }
  }
}
```

## Input example

```json
{
  "maxTopics": 50,
  "compareWithLastRun": true,
  "includeTopPosts": true,
  "topicsWithPosts": 10,
  "postsPerTopic": 5
}
```

Run it on a schedule (for example every hour) to fill the change columns. All options are listed on the [input page](https://apify.com/serenido/weibo-hot-search/input-schema).

## Output example (one row)

```json
{
  "type": "hotSearch",
  "rank": 3,
  "keyword": "APEC在湾区",
  "heat": 1012641,
  "label": "new",
  "isNew": false,
  "previousRank": 3,
  "rankChange": 0,
  "heatChange": -54444,
  "searchUrl": "https://s.weibo.com/weibo?q=%23APEC%E5%9C%A8%E6%B9%BE%E5%8C%BA%23"
}
```

Download as JSON, CSV or Excel, or connect to Make, Zapier or n8n.

## Use cases

- China trend monitoring for news, PR and brand teams
- Hourly hot-search history for research
- Feeding AI agents with what China is talking about right now

## More tools by Serenido

- [Weibo Scraper](https://github.com/serenido/weibo-scraper): posts, hot searches, comments and creators. No login.
- [Bilibili Scraper](https://github.com/serenido/bilibili-scraper): videos, comments, danmaku and creators. No login.
- [AliExpress Product Details Scraper](https://github.com/serenido/aliexpress-product-details-scraper): every variant with price and stock, shipping to 89 countries.
- [AliExpress Search Scraper](https://github.com/serenido/aliexpress-search-scraper): price, discount and exact order count for any search.
- [Australian Supermarket Prices: Coles, Woolworths and ALDI](https://github.com/serenido/coles-woolworths-aldi-scraper): Coles, Woolworths and ALDI in one run, with unit prices.
- [Google Trends Scraper](https://github.com/serenido/google-trends-scraper): interest over time, rising queries, regions and Trending Now.
- [Football xG Scraper](https://github.com/serenido/football-xg-scraper): Understat xG tables, matches, shots, players and lineups.
- [AliExpress Dropshipping Scraper](https://github.com/serenido/aliexpress-dropshipping): winning products with shipping to your country, landed cost and profit.

## Support

Found a bug or need a field? Open an issue here or on the [Issues tab on Apify](https://apify.com/serenido/weibo-hot-search/issues).

Use it only for public data and follow the website's terms and the laws that apply to you. This project is not affiliated with the websites it reads.
