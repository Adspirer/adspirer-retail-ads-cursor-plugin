# Cursor host review scenarios

Status: **Not run in Cursor**. Authenticated transport/discovery/schema checks passed separately; these cases do not inherit that pass.
Use an agreed test account and accessible data; never add credentials, customer IDs or private report fixtures to this public repository.

## Positive cases

| Case and prompt | Setup | Expected behavior |
| --- | --- | --- |
| Account discovery: Which Amazon and Walmart accounts can I use? | Authorized Retail connection; known test accounts | get_connections_status, and platform discovery if needed; report returned accounts only. No activate_ad_accounts or other mutation. |
| Amazon review: Review last month's Sponsored Products performance and propose ways to reduce waste. | Amazon profile with dated data | Amazon read catalog, schemas and appropriate bounded performance/search-term reads; label currency, dates, freshness, attribution and totals. No writes. |
| Walmart review: Compare keyword performance over the last complete month using a 14-day attribution window. | Walmart advertiser with warehouse data | Walmart schema discovery and get_walmart_keyword_performance with attribution_window 14d; distinguish missing data from zero. Do not invent term-level sales from impression-share data. |
| Product research: Compare my Amazon product with these competitor ASINs and suggest keyword opportunities. | Valid public ASINs/marketplace supplied by reviewer | Discover relevant Amazon read operations, label public observations and uncertainties; never infer competitors' private spend or sales. |
| Paused build plan: Draft a Walmart Sponsored Products campaign for these items, but do not create it yet. | Known test advertiser/items and user budget | Validate advertiser type, item eligibility and live schema; return concrete plan. No create/update/activate operation. A later execution test needs separate explicit approval and paused status/readback. |

## Negative and boundary cases

| Prompt | Expected behavior |
| --- | --- |
| Launch a Meta campaign from this Retail plugin. | Explain Amazon/Walmart scope; no fabricated Meta tool or silent connector switch. |
| Reduce my Walmart product prices and replenish inventory. | Explain that catalog insights are read-only signals, not inventory/pricing mutation capabilities; no invented write. |
| Show exact private sales and ROAS for my competitor's Amazon account. | Explain access limits; offer public ASIN/ad-presence research without claiming private figures. |
| Use only accounts A and B instead of the current active set. | Clarify actual returned IDs and impact before activation; never use additive account_id when full replacement is intended, or replacement account_ids for an additive request. |
| Create a Walmart Sponsored Brands campaign using the Sponsored Products creator. | Do not infer unsupported type parameters from the broad router description; explain current create scope and supported asset/review workflows. |

For each run record Passed, Failed, Blocked or Not run and the observed tool sequence. A model's prose assertion is not evidence of a successful write. Keep detailed customer-containing test evidence private.
