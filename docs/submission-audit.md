# Cursor submission audit — 2026-10-25

## Verdict

Package structure and authenticated discovery pass. Ready for Cursor host testing and publisher review preparation, not a claim of marketplace submission, approval, ranking or end-to-end campaign success.

## Primary sources and examples

- [Cursor plugin reference](https://cursor.com/docs/reference/plugins): manifest paths, component discovery, frontmatter, HTTP MCP, skills and rules.
- [Official template](https://github.com/cursor/plugin-template): single-plugin repositories explicitly omit marketplace.json; its default multi-plugin wrapper is unnecessary here.
- [Power BI addition, October 24](https://github.com/cursor/plugins/commit/b6375f1c): compact manifest, hosted HTTP endpoint, explicit scopes and prerequisites. Its cursor: never flag is for a Grok Bot-only integration, not a template to copy.
- [Tailscale update, October 25 merge](https://github.com/cursor/plugins/commit/99b609a7): complex setup remains a task-specific skill, with real account choices and troubleshooting rather than unnecessary background hooks.
- [Tailscale description alignment](https://github.com/cursor/plugins/commit/a29ce404): synchronize manifest, listing and README copy.
- [Ahrefs](https://github.com/cursor/plugins/tree/main/third_party/ahrefs): short use-case description, focused keywords, service-specific homepage, OAuth instructions, plan requirements and live runtime as tool authority.
- Prior Adspirer Main, Search Ads and Social Ads manifests: same single-plugin layout, relative logo, skill/agent/rule paths, HTTP MCP and company author. Categories are requests, not guaranteed storefront placement.

These examples demonstrate accepted source patterns, not proof that every merged change is already visible in the public marketplace. No extra commands, hooks, dynamic variables, stdio bridge or multi-plugin catalog is needed for Retail's existing OAuth HTTP endpoint.

## Checks performed

- Official current Cursor manifest schema; JSON and YAML parsing.
- Eleven matching retail-ads-prefixed skill names and existing skill/reference links.
- One scoped agent and one non-global rule; no unrelated endpoint or unsupported operation references.
- All skill operation names checked against the dated authenticated 172-operation inventory.
- OAuth, initialize, eight top-level tool schemas and all nested operation definitions verified during creation on this date. No campaign operations executed.
- Logo is a committed 640x640 PNG; no credential placeholders, customer data or auth cache bundled.
- Product homepage, documentation, privacy and terms URLs retrieved successfully. Retail homepage has a matching canonical URL and index, follow robots tag.
- CI validates package shape, YAML, schema and whitespace. Copy consistency and primary search terms are now regression checks.

## Search discovery

Name: Adspirer Retail Ads. Preview: Amazon & Walmart retail advertising.
Keywords include retail ads, retail advertising, Amazon Ads, Amazon PPC, Walmart Connect, Walmart Ads, retail media and ecommerce advertising, plus real campaign/measurement terms.
README and GitHub About should use consistent descriptions, a public retail-product homepage and relevant topics.
All eleven skills retain the requested adspirer-retail-ads- prefix. Their descriptions explain actual tasks; do not repeat synonyms merely to stuff keywords.

Cursor documents keywords as discovery metadata but does not publish guaranteed ranking weights. Skill names do not guarantee marketplace search placement. Website indexing, GitHub search, Cursor search and model skill selection are separate mechanisms.
Keep the primary display name stable and request appropriate publisher/category association. Do not claim verified status until Cursor grants it.

## Remaining checks and decisions

1. Run the local installation and OAuth checks in Cursor itself. Our MCP client authentication is not proof of Cursor installation/co-installation behavior.
2. Run the account/report cases with an agreed account; only run mutation tests after a specific paused-build approval.
3. Confirm final category with Cursor. Data & Analytics is requested, not assigned by this repository.
4. Ensure the live storefront matches submitted copy after publication/re-indexing.
5. The Retail Media homepage is indexable, but its current title emphasizes ChatGPT and Claude. Consider adding Cursor to the website's copy/title in a separate website change; no website was changed here.
6. Published privacy/terms cover MCP integrations broadly but do not explicitly name Walmart in the retrieved platform lists. Have the policy owner confirm the new integration's coverage and whether those lists need updating; this audit is not a legal certification.

No changes were made to the server, original Main plugin, Search Ads plugin or Social Ads plugin.
