# AGENTS Notes

## Hydration + Browser Extensions
- Contact form is rendered client-only (`dynamic(..., { ssr: false })`) to avoid hydration mismatches caused by password-manager DOM injections (LastPass and similar).
- If hydration warnings mention extra nodes like `data-lastpass-icon-root`, treat extension DOM mutation as first suspect.
- Do not re-enable SSR for the contact form unless extension-safe hydration strategy is implemented and verified.
