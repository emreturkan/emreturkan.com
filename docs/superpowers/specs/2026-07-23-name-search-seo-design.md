# Name Search SEO Design

## Goal

Strengthen `emreturkan.com` as the canonical result for searches for
`Emre Turkan` while helping Google associate the common accented query
`Emre Türkan` with the same person.

## Identity Rules

`Emre Turkan` is the person's correct and canonical name. It remains the only
name used in visible headings, page titles, descriptions, and authored content.
`Emre Türkan` is included only as a machine-readable alternate name; the site
must not present it as the person's actual surname or add artificial keyword
text to the page.

## Metadata and Structured Data

The shared site configuration will define `Emre Türkan` and `emreturkan` as
alternate identifiers. The `Person` JSON-LD entity will expose those values
through `alternateName` and keep the existing verified external profiles in
`sameAs`.

The home page will use a concise absolute title so the root layout title
template does not append `Emre Turkan` a second time. The canonical URL remains
`https://emreturkan.com`.

The root metadata will stop advertising `/tr` as an alternate-language page
because that route does not exist. A Turkish `hreflang` will only be restored
if a real Turkish page is created later.

## Scope

This change does not create a Turkish translation, add hidden SEO text, alter
the visible homepage design, or guarantee a particular Google ranking. Ranking
and recrawling remain controlled by Google.

## Validation

Automated tests will verify the canonical name, alternate identifiers, concise
home title, and absence of the invalid `/tr` language alternate. A production
build will verify Next.js metadata integration. After deployment, the homepage
and sitemap should be submitted or re-requested in Google Search Console.
