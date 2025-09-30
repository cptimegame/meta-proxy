# Meta Ads Proxy

This is a lightweight Node.js proxy for the Meta Marketing API.  
It allows safe campaign, ad set, ad creative, and ad creation by injecting your access token server-side.

## 🚀 Endpoints

- POST `/createCampaign`
- POST `/createAdSet`
- POST `/createAdCreative`
- POST `/createAd`

## 🔑 Environment Variables

Create a `.env` file (or set in Render):

```
META_ACCESS_TOKEN=YOUR_LONG_LIVED_TOKEN
META_AD_ACCOUNT_ID=act_1070985436957250
```

## 🪜 Deploying to Render

1. Push this repo to GitHub.  
2. In Render → **New Web Service**.  
3. Link to your repo.  
4. Build command: `npm install`  
5. Start command: `npm start`  
6. Add environment variables in Render dashboard:  
   - `META_ACCESS_TOKEN` = your token  
   - `META_AD_ACCOUNT_ID` = your ad account ID  
7. Deploy → you’ll get a public URL like:  
   ```
   https://meta-proxy.onrender.com/createCampaign
   ```
