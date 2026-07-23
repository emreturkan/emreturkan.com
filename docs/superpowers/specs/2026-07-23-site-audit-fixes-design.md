# Site Audit Fixes Design

## Goal

Resolve every confirmed issue from the production audit without changing the
site's established visual character or adding new content sections.

## SEO Artifacts

`next-sitemap` will be the source of truth for both sitemap and robots output.
The sitemap will contain only the real public pages (`/`, `/bookmarks`,
`/photos`, and `/techs`), exclude metadata routes such as `/apple-icon`, and
omit language alternates because the site has one language. Output will be
deterministic rather than changing `lastmod` on every build.

The robots configuration will preserve the currently published policy: normal
search crawlers and named AI/search assistants are allowed. The generated
`public/robots.txt` and configuration must no longer disagree.

## Manifest

The manifest will describe Emre Turkan as a Full Stack Developer. It will
reference only the existing `/favicon.ico` and generated `/apple-icon` images.
The missing 192px, 512px, and screenshot URLs will be removed so browsers no
longer emit 404 errors.

## Code Quality

The removed Next.js `next lint` command will be replaced with the ESLint CLI
and a Next.js 16 flat configuration. Lint becomes a working verification gate
alongside the existing Node tests and production build.

## Navigation and Accessibility

The desktop navigation retains its current appearance. On small screens, the
same links appear in a compact second row instead of disappearing. Standard
site navigation will use native list and link semantics rather than ARIA
`menubar` roles.

The copy-email button will use its visible text as its accessible name. The
photos teaser link will say `view all photos`. Each content page will expose
one visible `h1`; redundant screen-reader-only `h1` elements will be removed.

## Structured Data

`Person`, `WebSite`, and `ProfilePage` JSON-LD will move out of the root layout
and render only on the homepage. `ProfessionalService` will be removed because
the site does not explicitly advertise a freelance service. The canonical
name and alternate-name signals added in the previous change remain intact.

## Activity Wording

The Steam card displays historical last-played data, so its status label will
change from `Playing` to `Last played`.

## Validation and Delivery

Regression tests will cover sitemap routes, robots policy, manifest assets,
structured-data placement, accessible labels, mobile navigation semantics,
single-page headings, and Steam wording. Verification will run all tests,
ESLint, a production build, generated-artifact checks, and a local Lighthouse
audit.

After verification, the implementation will be committed and pushed to the
configured `main` remote. The live site will be polled for the new commit, then
the production sitemap, manifest, console, mobile navigation, and Lighthouse
results will be rechecked.
