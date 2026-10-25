# Skill provenance

Adapted from the existing Adspirer Cursor family, not a wholesale copy of the main hub.
Social specialist source inspected at f696a9c; original main Amazon skill inspected locally.
Walmart source: Adspirer/adstudio production-deployment at 9a35a2974125830940e609f039ed08e772d5458a,
adspirer-mcp-ads/chatgpt-plugin/skills/adspirer-walmart-ads/SKILL.md.
All routing and platform details were checked against authenticated Retail discovery on 2026-10-25.

| Original workflow | Retail Ads skill | Adaptation |
| --- | --- | --- |
| MCP contract | adspirer-retail-ads-tools | Eight live top-level tools; exact read/write dispatch and consent |
| Setup | adspirer-retail-ads-setup | Amazon/Walmart connections; optional preserved brand files |
| Docs/product help | adspirer-retail-ads-product-help | Current docs and account helpers, no cached prices |
| Agent strategy | adspirer-retail-ads-strategy | Retail goals, routing, evidence and approval |
| Amazon Ads | adspirer-retail-ads-amazon | Retail routers, SP/SB/SD, account currencies, safe passthrough |
| Walmart Ads | adspirer-retail-ads-walmart | Retail routers; corrected creation/reporting limitations |
| Launch | adspirer-retail-ads-campaign-launch | Paused retail builds, eligibility and child-resource verification |
| Keyword research | adspirer-retail-ads-keyword-research | Amazon ASIN research and Walmart item/demand signals |
| Performance review | adspirer-retail-ads-performance | ACoS/ROAS, warehouse freshness, consistent attribution |
| Optimize | adspirer-retail-ads-optimization | Stock/buybox context, proposed changes and readback |
| Creative | adspirer-retail-ads-ad-creative | Listing-derived copy, real asset formats and review states |

Every skill name includes retail-ads to distinguish it from Main, Search and Social.
Unrelated platform skills and unsupported generic audit/monitoring/onboarding workflows are omitted.
Original repositories and server implementation were not changed.
