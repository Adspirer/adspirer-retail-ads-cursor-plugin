# Authenticated Retail MCP audit

Verified 2026-10-25 via browser OAuth with PKCE and an MCP client; not merely inferred from source.
Endpoint: https://mcp.adspirer.com/retail-ads
Server: adspirer-mcp-retail, version 0.1.0; negotiated protocol 2025-06-18.
Capabilities: tools, resources, prompts. Capability advertisement does not prove every resource/prompt or host widget has been tested.

## Live discovery

| Router | Operations |
| --- | ---: |
| amazon_ads_read | 55 |
| amazon_ads_write | 61 |
| walmart_ads_read | 31 |
| walmart_ads_write | 25 |
| Total nested operations | 172 |

Other top-level tools: get_tool_schema, get_connections_status, get_usage_status, activate_ad_accounts.
All four router list_tools calls and get_tool_schema for all 172 operations succeeded.
The schema helper returns human-readable parameter definitions; it is not a guarantee of exhaustive nested JSON Schema validation.
See [operation-index.json](docs/operation-index.json) for names and read/write classification. Re-discover before use; these are dated observations.

## Important limitations captured in skills

- No start_here, generic competitor_ads_research, audit_conversion_tracking or monitoring router.
- Amazon-specific competitor/review/ranking research is present inside its read router.
- Amazon Sponsored Display is in operation discovery despite the shorter router summary.
- Walmart create_walmart_campaign documents Sponsored Products; SB/SV asset/review support is separate.
- Walmart search-term reporting describes impression share/rank despite generic sales/spend parameter text. Do not invent columns.
- Walmart create examples include enabled status; skills explicitly override with paused.
- amazon_unified_api has conflicting prose about adProduct on update items; use dedicated operations and resolve ambiguity before passthrough.
- Account activation can add one account or replace the full active set; explicit approval is required.

## Not tested

No profile/advertiser data, campaign report, creation, update, spend-affecting action or account activation was executed.
No credentials or customer responses are stored here. Cursor installation, OAuth in Cursor, co-installation and end-to-end campaign behavior remain separate checks.
Source corroboration: Adspirer/adstudio production-deployment 9a35a2974125830940e609f039ed08e772d5458a.
