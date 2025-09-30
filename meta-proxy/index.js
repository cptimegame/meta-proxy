import express from "express";
import fetch from "node-fetch";

const app = express();
app.use(express.json());

// ⚡ Replace with your real token + account ID
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;
const AD_ACCOUNT_ID = process.env.META_AD_ACCOUNT_ID || "act_1070985436957250";

// ✅ Campaign creation
app.post("/createCampaign", async (req, res) => {
  try {
    const { name, objective, status, special_ad_categories } = req.body;
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${AD_ACCOUNT_ID}/campaigns`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          objective,
          status,
          special_ad_categories: special_ad_categories || []
        })
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Ad Set creation
app.post("/createAdSet", async (req, res) => {
  try {
    const { campaign_id, name, daily_budget, billing_event, optimization_goal, bid_strategy, targeting, status } = req.body;
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${campaign_id}/adsets`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          daily_budget,
          billing_event,
          optimization_goal,
          bid_strategy,
          targeting,
          status
        })
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Ad Creative creation
app.post("/createAdCreative", async (req, res) => {
  try {
    const { name, object_story_spec } = req.body;
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${AD_ACCOUNT_ID}/adcreatives`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          object_story_spec
        })
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Ad creation
app.post("/createAd", async (req, res) => {
  try {
    const { adset_id, name, creative, status } = req.body;
    const response = await fetch(
      `https://graph.facebook.com/v23.0/${adset_id}/ads`,
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${ACCESS_TOKEN}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          creative,
          status
        })
      }
    );
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => console.log("🚀 Meta Proxy running on port 3000"));
