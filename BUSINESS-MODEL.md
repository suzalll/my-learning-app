# CatalogHub — Business Model & Go-to-Market Strategy

## Product Overview

**CatalogHub** is a B2B SaaS lead intelligence platform powered by two production engines:

1. **Fashion Social Scraper** (Python) — Daily ranked feeds of top-100 hot buyers via hashtag/hub/graph discovery, filtering, scoring, and Google Sheets export.
2. **Prospect Engine** (TypeScript) — End-to-end pipeline: Google Maps + Instagram discovery → profile scrape → dual qualification gates → lead scoring → CSV/Excel export.

**Target market:** B2B companies selling to Instagram/WhatsApp-native businesses in India — SaaS tools, agencies, suppliers, and field sales teams.

**Market context:** India social commerce $29.3B → $143.9B by 2030. Millions of MSMEs sell via Instagram DMs with no dedicated website — the ideal CatalogHub buyer profile.

---

## How We Sell It

### Primary channel: Product-led growth (PLG)
- 14-day free trial with 500 qualified leads
- Self-serve signup → dashboard → first pipeline run within 24 hours
- In-app upgrade prompts when users hit plan limits
- Content marketing: case studies, ROI calculator, pipeline walkthroughs

### Secondary channel: Outbound sales
- Target SaaS founders, agency owners, and B2B sales leaders
- Demo = live pipeline run for prospect's city + vertical
- Sample deliverable: 12 ranked leads with phone numbers (proven in Jaipur pilot)

### Tertiary channel: Agency partnerships
- White-label Agency plan for resellers
- Agencies package "50 qualified leads/month" as ₹25K retainer
- Revenue share on referrals (15% recurring for 12 months)

---

## Pricing Model

### Monthly subscriptions

| Plan | Price | Leads/mo | Target customer |
|------|-------|----------|-----------------|
| **Starter** | ₹4,999/mo | 500 | Solo founders, small sales teams |
| **Growth** | ₹14,999/mo | 2,500 | Scaling sales teams, single-company |
| **Agency** | ₹39,999/mo | 10,000 | Multi-client agencies, resellers |
| **Enterprise** | Custom | Unlimited | Large teams, custom deployment |

### Pay-per-lead (no subscription required)

| Lead type | Price | Description |
|-----------|-------|-------------|
| Strong Buyer | ₹75/lead | Gate 3 qualified, score ≥70, WhatsApp contact |
| Possible Buyer | ₹45/lead | Qualified business, moderate signals |
| Custom pipeline run | ₹9,999/run | One-time city + category, top 100 export |

### Effective cost per lead at scale

| Plan | Monthly cost | Leads | Cost/lead |
|------|-------------|-------|-----------|
| Starter | ₹4,999 | 500 | ₹10 |
| Growth | ₹14,999 | 2,500 | ₹6 |
| Agency | ₹39,999 | 10,000 | ₹4 |
| Enterprise (50K+) | Custom | 50,000+ | ₹15 |

---

## Revenue Projections

### Assumptions
- Average revenue per customer increases with scale (plan mix shifts toward Growth/Agency)
- 5% monthly churn on Starter, 3% on Growth, 2% on Agency
- 30% of Starter customers upgrade to Growth within 6 months

### Scenario modeling

| Customers | Plan mix (S/G/A) | Avg. rev/customer | Monthly MRR | Annual ARR |
|-----------|------------------|-------------------|-------------|------------|
| **10** | 6 / 3 / 1 | ₹9,500 | **₹95,000** | **₹11.4L** |
| **50** | 25 / 18 / 7 | ₹12,800 | **₹6.4L** | **₹76.8L** |
| **100** | 40 / 45 / 15 | ₹15,200 | **₹15.2L** | **₹1.82Cr** |
| **500** | 150 / 250 / 100 | ₹18,500 | **₹92.5L** | **₹11.1Cr** |

### Additional revenue streams
- **Pay-per-lead overages:** ~15% of subscription revenue
- **Custom pipeline runs:** ₹9,999 × estimated 20 runs/month at 100 customers = ₹2L/mo
- **Enterprise contracts:** 2–5 deals/year at ₹5–15L annual = ₹10–75L
- **Agency white-label markup:** Agencies charge 3–5× CatalogHub cost to their clients

---

## Agency Business Model

Agencies are the highest-LTV customer segment:

1. **Subscribe** to Agency plan (₹39,999/mo)
2. **Configure** pipelines per client (city + vertical)
3. **Package** as "50 qualified leads/month" retainer at ₹25,000/client
4. **Profit margin:** ₹25K client fee − ₹4K CatalogHub cost = **₹21K profit per client**
5. **At 10 clients:** ₹2.5L/mo revenue, ₹1.7L/mo profit from ₹40K CatalogHub subscription

---

## Customer Acquisition Cost (CAC) Estimates

| Channel | CAC | LTV (12 mo) | LTV:CAC |
|---------|-----|-------------|---------|
| Free trial → paid | ₹2,000 | ₹1.14L (Growth) | 57× |
| Outbound demo | ₹8,000 | ₹1.8L (Agency) | 22× |
| Agency referral | ₹5,000 | ₹4.8L (Agency, 12 mo) | 96× |
| Content/SEO | ₹1,500 | ₹60K (Starter) | 40× |

---

## How to Pitch This Product

### 30-second elevator pitch
> "CatalogHub finds businesses actively selling on Instagram — ranked by buying intent, with WhatsApp numbers attached. Not a purchased list. A live intelligence feed updated daily. Our Jaipur pilot found 112 Strong Buyers from 847 scraped profiles. 8 closed deals in week one."

### For SaaS founders
> "Your ideal customer is an Instagram seller taking DM orders with no website. CatalogHub finds them, scores them, and ranks them — so your sales team DMs the right accounts, not random handles. One ₹15K/month subscription close pays for 3 months of CatalogHub."

### For agencies
> "Stop buying lead lists at ₹50K/month with 3% close rates. White-label CatalogHub, run pipelines for each client, and package '50 qualified leads' as a ₹25K retainer. Your cost: ₹4K. Your margin: ₹21K per client."

### For B2B suppliers
> "Your field team wastes 40 hours/month scrolling Instagram. CatalogHub delivers a daily ranked top-100 with activity scores, engagement rates, and WhatsApp contacts. Replace two researchers with one subscription."

### Demo script (15 minutes)
1. Show live pipeline card (discovery → scrape → qualify → score → export)
2. Open dashboard with sample Jaipur fashion leads
3. Click into a Strong Buyer — show activity score, conversion signals, profile URL
4. Show funnel metrics: 2,847 discovered → 412 qualified → 89 Strong Buyers → 100 exported
5. Compare to purchased list: stale data, no scoring, 1–3% close rate vs. 10–15%
6. Close: "Start your 14-day trial. First ranked feed in 24 hours."

---

## Why CatalogHub Beats Random Lead Lists

| Factor | CatalogHub | Purchased lists |
|--------|------------|-----------------|
| **Freshness** | Daily discovery, last 7–14 day activity | Static database, unknown age |
| **Qualification** | 3-gate system (business → buyer → score) | None — raw contact dump |
| **Intent signals** | WhatsApp ordering, DM-to-order, no website | No intent data |
| **Ranking** | Composite score: activity 70% + intent 15% + engagement 15% | Random or alphabetical order |
| **Deduplication** | Permanent SQLite store, never re-process rejects | Duplicate contacts common |
| **Contact enrichment** | WhatsApp, email, link-in-bio, automation stack | Often outdated or missing |
| **Close rate** | 10–15% on Strong Buyers | 1–3% industry average |
| **Cost per closed deal** | ₹400–2,000 | ₹5,000–15,000 |
| **Compliance** | Public business data only | Often scraped without consent |
| **Transparency** | Full funnel metrics at every stage | Black box — no visibility |

---

## Competitive Positioning

| Competitor type | Their weakness | CatalogHub advantage |
|----------------|---------------|---------------------|
| Lead list vendors (IndiaMART, JustDial exports) | Static, unqualified, high duplicate rate | Live discovery + multi-gate qualification |
| Manual Instagram prospecting | 40+ hrs/month, inconsistent | Automated daily ranked feed |
| Generic scrapers (Apify, Phantombuster) | Raw data, no scoring or qualification | End-to-end pipeline with buyer fit labels |
| CRM lead tools (HubSpot, Apollo) | Western-focused, no India social commerce signals | Built for Instagram/WhatsApp sellers in India |
| Dukaan/QuickSell (competitors in seller tools) | They sell TO sellers; we find sellers FOR vendors | Complementary — we feed the top of their funnel |

---

## Key Metrics to Track

| Metric | Target (Month 6) | Target (Month 12) |
|--------|-------------------|---------------------|
| MRR | ₹6.4L (50 customers) | ₹15.2L (100 customers) |
| Trial → paid conversion | 25% | 30% |
| Monthly churn | <5% | <3% |
| NPS | 40+ | 50+ |
| Leads delivered/month | 50,000 | 150,000 |
| Strong Buyer % | >20% of qualified | >25% |
| Avg. close rate (reported) | 10% | 12% |

---

## Launch Roadmap

### Phase 1 — MVP (Now)
- ✅ Marketing website (this repo)
- ✅ Dashboard placeholder with sample data
- ✅ Auth UI (login/signup → dashboard redirect)
- Engine running locally for demo pipeline runs

### Phase 2 — Beta (Month 1–2)
- Connect dashboard to live prospect engine API
- Stripe/Razorpay billing integration
- Self-serve pipeline configuration (city + category)
- Email notifications for daily feed delivery

### Phase 3 — GA (Month 3–4)
- Google Sheets sync
- Multi-city pipeline scheduling
- Agency multi-workspace support
- API access for Enterprise

### Phase 4 — Scale (Month 5–12)
- CRM integrations (HubSpot, Salesforce)
- Custom scoring rule builder
- White-label portal for Agency plan
- Expand to YouTube, Facebook discovery sources

---

## Summary

CatalogHub transforms a production-grade lead generation engine into a commercially viable SaaS product targeting India's $143B social commerce market. With subscription + pay-per-lead pricing, agency white-label opportunities, and proven close rates 5× higher than purchased lists, the path to ₹1.82Cr ARR at 100 customers is achievable within 12 months of launch.

**Next step:** Deploy website to GitHub Pages, connect billing, and onboard first 10 beta customers from existing network.
