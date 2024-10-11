# Visit 🧿 [wakeupwakeupwakeup.com](wakeupwakeupwakeup.com)

## ✨ Overview

This site is dedicated to revealing the truths behind America's healthcare, media, and food systems, and exposing the hidden corruption that affects our daily lives. With the rise in independent media like podcasts and Substack, people every where are finally realizing the truth, and it can't be hidden for much longer.

This is not intended to be conspiratorial, or political for that matter, but to present strictly the facts without sensationalism, cut through the noise, and give readers a straightforward account of the tangled mess we're dealing with. This information is for ALL people, no matter your views. It's time to WAKE UP and take informed action before it's too late.

---

## 💻 Development

### Built With

<img src="https://img.shields.io/badge/next%20js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white"/> <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"/> <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>

This site is using [Nextra](https://nextra.site/), a documentation site framework using Next.js and MDX.

### Getting Started

Install dependencies:

```bash
pnpm install
```

Run development server:

```bash
pnpm dev
```

View on `http://localhost:3000/`.

### Content

All content is added as `.mdx` files to `/pages`. By default, it maps all `.md` or `.mdx` content in alphbetical order of the filename.

The default structure can be overridden with `_meta.json`:

Example:

```json
{
  "index": "My Homepage",
  "contact": "Contact Us",
  "about": "About Us"
}
```

### Configuration

All configuration with the Nextra theme is done in `theme.config.tsx`. Some configuration options are included here for reference. The full theme configuration documentation can be found [here](https://nextra.site/docs/docs-theme/theme-configuration).

#### Banner

The banner dismissal is saved in localStorage. Update the `key` when the `text` is updated to ensure the banner is shown again for all users.

```js
  banner: {
    key: "welcome",
    text: "Welcome to the website!",
  },
```

#### Table of Contents

The ToC displays on the right-hand side of a page. Extra content can be displayed with `toc.extraContent`.

Here is an example of a property value being a React node (ie. extending the configuration with a custom component):

```js
import TocCallout from "./components/toccallout";
//...
const config: DocsThemeConfig = {
  //...
  toc: {
    extraContent: <TocCallout />,
  },
  //...
};
```

#### Feedback/Edit Links

These links will automatically point to the specified repository. Use these options to customize these links, or set to `null` to disable.

- Feedback: `feedback.content`
- Edit Link: `editLink.component`

#### Footer

Customize the footer with `footer.component` or update the default content using `footer.text`.

### Built-Ins

Nextra includes a few built-in components to be used in MDX which includes:

#### Callouts

```js
import { Callout } from "nextra/components";

<Callout type="info" emoji="ℹ️">
  Today is Friday.
</Callout>;
```

#### Tabs

```js
import { Tabs } from "nextra/components";

<Tabs items={["pnpm", "npm", "yarn"]}>
  <Tabs.Tab>**pnpm**: Fast, disk space efficient package manager.</Tabs.Tab>
  <Tabs.Tab>
    **npm** is a package manager for the JavaScript programming language.
  </Tabs.Tab>
  <Tabs.Tab>**Yarn** is a software packaging system.</Tabs.Tab>
</Tabs>;
```

#### Icons

```js
import { Cards, Card } from "nextra/components";
import { CardsIcon, OneIcon, WarningIcon } from "../../icons";

<Cards>
  <Card
    icon={<WarningIcon />}
    title="Callout"
    href="/docs/guide/built-ins/callout"
  />
  <Card icon={<CardsIcon />} title="Tabs" href="/docs/guide/built-ins/tabs" />
  <Card icon={<OneIcon />} title="Steps" href="/docs/guide/built-ins/steps" />
</Cards>;
```

#### Steps

```js
import { Steps } from "nextra/components";

<Steps>### Step 1 Contents for step 1. ### Step 2 Contents for step 2.</Steps>;
```

### Custom CSS

This project is using Tailwind. Global Tailwind configuration is done in `tailwind.config.js`. Full documentation on Tailwind can be found [here](https://tailwindcss.com/docs/installation).

The `@tailwind` directives were added to `globals.css` and the CSS was imported into `/pages/_app.tsx`.

## ✉️ Contact

This site was made by [Darian](https://darian.digital). You can get in touch with me at [darian@darian.digital](mailto:darian@darian.digital).

---
