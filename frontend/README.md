# Next.js + Tailwind CSS + TypeScript Starter

## Usage Guide

### 1. Change defaults

There are some things you need to change including title, urls, favicons, etc. Here are the list

#### `components/Seo.tsx`

Change title, sitename, url, and opengraph image

```tsx
const defaultMeta = {
  title: 'Next.js + Tailwind CSS + TypeScript Starter',
  site_name: 'Next.js + Tailwind CSS + TypeScript Starter',
  description:
    ' A starter for Next.js, Tailwind CSS, and TypeScript with Absolute Import, Seo, Link component, pre-configured with Husky',
  url: 'https://theodorusclarence.com',
  image: 'https://theodorusclarence.com/favicon/large-og.jpg',
  type: 'website',
  robots: 'follow, index',
};
```

#### `next-sitemap.js`

Change the siteUrl to generate sitemap correctly

```js
module.exports = {
  siteUrl: 'https://ts-nextjs-tailwind-starter.theodorusclarence.com/',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
```

#### `package.json`

Change the package name to your project name.

#### `public/favicon`

Favicon are generated from [favicon-generator site](https://favicon-generator.org), generate a new favicon and replace all of favicons inside.

### 2. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Snippets

This starter is equipped with workspace-snippets, it is encouraged to use it, especially the `np` and `rc`

### Next.js Page

File inside `src/pages` will be the webpage route, there are 2 things that need to be added in Next.js page:

1. Seo component
2. Layout class to give constraint to viewport width. [Read more about layout class](https://theodorusclarence.com/blog/tailwindcss-best-practice#1-using-layout-class-or-container).

Snippets: `np`

```tsx
import * as React from 'react';
import Seo from '@/components/Seo';
export default function TestPage() {
  return (
    <>
      <Seo templateTitle='Test' />
      <main>
        <section className=''>
          <div className='layout'></div>
        </section>
      </main>
    </>
  );
}
```

### React Components

To make a new component, It is encouraged to use `export default function`. Because when we need to rename it, we only need to do it once.

Snippets: `rc`

```tsx
import * as React from 'react';
export default function Component() {
  return <div></div>;
}
```

### Import React

Snippets: `ir`

```tsx
import * as React from 'react';
```

### Import Next Image

Snippets: `imimg`

```tsx
import Image from 'next/image';
```

### Import Next Link

Snippets: `iml`

```tsx
import Link from 'next/link';
```

### useState Hook

Snippets: `us`

```tsx
const [state, setState] = React.useState(initialState);
```

### useEffect Hook

Snippets: `uf`

```tsx
React.useEffect(() => {}, []);
```

### useReducer Hook

Snippets: `ur`

```tsx
const [state, dispatch] = React.useReducer(someReducer, {});
```

### useRef Hook

Snippets: `urf`

```tsx
const someRef = React.useRef();
```

### Region Comment

It is really useful when we need to group code. It is also collapsible in VSCode

Snippets: `reg`

```tsx
//#region  //*============== FORM SUBMIT
//#endregion  //*============== FORM SUBMIT
```

You should also use [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments) extension.
