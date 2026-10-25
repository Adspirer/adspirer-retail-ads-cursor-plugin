# Adspirer Retail Ads for Cursor

Retail advertising agent for Amazon and Walmart. Research products and keywords, create campaigns, analyze sales, and optimize ad spending—with your approval.

Company-owned Cursor distribution package using **https://mcp.adspirer.com/retail-ads**.
Requested category: **Productivity**; Cursor controls final placement and verification.
This repository is not a marketplace approval or submission.

## What it includes

- Amazon Sponsored Products, Sponsored Brands and Sponsored Display workflows, product/keyword research, performance and budget recommendations.
- Walmart Connect advertiser/campaign management, Sponsored Products creation, keyword/item reports, catalog insights, placements, and eligible brand/video asset and review workflows.
- Eleven task-specific skills, one retail-advertising agent and one task-scoped safety rule.
- Hosted HTTP MCP with browser OAuth and PKCE; no bundled server, API key or credentials.

Walmart's create_walmart_campaign currently documents Sponsored Products, not generic Sponsored Brands/Video campaign creation.
Supported SB/SV asset and review operations do not imply end-to-end campaign creation. Permissions and advertiser eligibility still apply.

## Connect in Cursor

Use Cursor's supported local plugin workflow before marketplace publication, or configure the existing MCP endpoint directly in Cursor using mcp.json.
Complete the browser authorization flow, then connect the relevant ad accounts at https://adspirer.ai/connections.
After marketplace approval, install the published Adspirer Retail Ads listing. Do not assume a listing exists from this repository alone.
An Adspirer account and applicable service plan/access are required; ad-platform fees and usage limits apply.
Never paste tokens into chat or commit OAuth credentials.

## Skills

- [adspirer-retail-ads-tools](skills/adspirer-retail-ads-tools/SKILL.md)
- [adspirer-retail-ads-setup](skills/adspirer-retail-ads-setup/SKILL.md)
- [adspirer-retail-ads-product-help](skills/adspirer-retail-ads-product-help/SKILL.md)
- [adspirer-retail-ads-strategy](skills/adspirer-retail-ads-strategy/SKILL.md)
- [adspirer-retail-ads-amazon](skills/adspirer-retail-ads-amazon/SKILL.md)
- [adspirer-retail-ads-walmart](skills/adspirer-retail-ads-walmart/SKILL.md)
- [adspirer-retail-ads-campaign-launch](skills/adspirer-retail-ads-campaign-launch/SKILL.md)
- [adspirer-retail-ads-keyword-research](skills/adspirer-retail-ads-keyword-research/SKILL.md)
- [adspirer-retail-ads-performance](skills/adspirer-retail-ads-performance/SKILL.md)
- [adspirer-retail-ads-optimization](skills/adspirer-retail-ads-optimization/SKILL.md)
- [adspirer-retail-ads-ad-creative](skills/adspirer-retail-ads-ad-creative/SKILL.md)

See [SKILL-MAPPING.md](SKILL-MAPPING.md) for retained/adapted original workflows and [TOOL-COVERAGE.md](TOOL-COVERAGE.md) for the authenticated audit.

## Example prompts

- “Review my Amazon Sponsored Products results for the last complete 30 days. Find products and search terms wasting spend, account for attribution lag, and propose changes without applying them.”
- “Plan a paused Walmart Sponsored Products campaign for these eligible items within a $30 daily budget. Check my advertiser type and budget minimums before creating anything.”
- “Compare Walmart keyword and item performance using a consistent 14-day attribution window. Check inventory and buybox issues before recommending higher bids.”
- “Research Amazon competitor ASINs and shopper keywords for this product. Separate public market observations from my private campaign performance.”

## Safety

Discovery and reports do not authorize writes. Show the concrete plan and get approval before changing accounts, campaigns, bids, budgets, targeting or assets.
Explicitly create paused campaigns and verify children and status; enabling and moderation approval are separate decisions.
No unattended jobs or monitoring are configured by this package. Do not infer profits or incremental sales from attributed revenue.

## Verification and maintenance

Run `node scripts/validate-plugin.mjs` and `ruby scripts/validate-frontmatter.rb`.
CI also validates the manifest against Cursor's official schema.
Authenticated MCP discovery and all 172 operation definitions were retrieved on 2026-10-25. No ad-platform operation was executed, and installation inside Cursor remains untested.
Updates are maintained here; there is no automatic upstream sync that can overwrite this package.
Public marketplace publication/re-indexing is a separate Cursor review step.

## Support

- Support: support@adspirer.com
- Documentation: https://www.adspirer.com/docs
- Privacy: https://www.adspirer.com/privacy
- Terms: https://www.adspirer.com/terms

See [REVIEW.md](REVIEW.md) for remaining validation gates.
