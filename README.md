# Personal Portfolio Website

This project is a **personal academic portfolio website** built with **Next.js**, **React**, and **Tailwind CSS**.
It presents academic background, research interests, publications, services, projects and news in a responsive web interface.

The project is licensed under the MIT License. Please give credit to Athina Bampzeli if you use or adapt this template.

---

## Project Structure

```bash
website/
│── app/
    │── news/
        │── page.tsx
    │── research/
        │── lexicon/
            │── page.tsx
        │── projects/
            │── page.tsx
        │── layout.tsx
    │── globals.css
    │── layout.tsx
    │── page.tsx
│── components/
    │── FlipCard.tsx
    │── Footer.tsx
    │── Icons.tsx
    │── Navbar.tsx
    │── ShareButtons.tsx
│── public/
```

---

## `app/`

This folder contains the **pages and routing logic** of the website using the **Next.js App Router**.

### Main files:

### `app/page.tsx`

This is the **homepage** of the portfolio.
It contains the main sections:

* About
* Research Interests
* Publications
* Skills
* Services
* Contact

Each section is identified by an `id` so the navigation bar can scroll to it.

Example:

```tsx
<section id="about">
```

This allows links such as:

```tsx
href="/#about"
```

to navigate directly to that section.

---

### `app/layout.tsx`

Defines the **global layout** shared by all pages.

It wraps all pages with:

* global HTML structure
* fonts
* metadata
* global styles

It renders:

```tsx
<html>
  <body>{children}</body>
</html>
```

where `children` is the current page content.

---

### `app/globals.css`

Defines the **global styles** for the entire application.

This file is imported once in:

```tsx id="tr9nha"
app/layout.tsx
```

and applies styling rules that affect all pages and components.

It is used for:

* importing Tailwind base styles
* defining global typography
* setting default colors and spacing
* adding reusable custom CSS classes

---

### `app/news/page.tsx`

Defines the **News page**, where updates and announcements are displayed.

Route:

```bash
/news
```

---

### `app/research/projects/page.tsx`

Defines the **Research Projects page**.

Route:

```bash
/research/projects
```

---

### `app/research/lexicon/page.tsx`

Defines the **Lexicon page**, which provides terminology or research-related definitions.

Route:

```bash
/research/lexicon
```

---

### `app/research/layout.tsx`

Defines the layout shared by the research projects and lexicon pages.

---

## `components/`

This folder contains **reusable UI components** used throughout the site.

---

### `components/Navbar.tsx`

Implements the **navigation bar**, including:

* desktop navigation links
* mobile hamburger menu
* research dropdown menu

It manages state using:

```tsx
useState()
```

for:

* opening/closing mobile menu
* opening/closing research dropdown

This component enables navigation between:

* homepage sections
* research pages
* news page

---

### `components/Footer.tsx`

Displays the footer section of the site.

Contains:

* copyright
* share links

---

### `components/FlipCard.tsx`

Reusable **flip-card component** used in the services, research projects and news section.

Features:

* front side with title/image
* back side with description
* click to flip

This keeps cards modular and reusable.

---

### `components/Icons.tsx`

Reusable component file that stores **custom SVG icon components** used across the website.

---

### `components/ShareButtons.tsx`

Reusable component for rendering **social sharing buttons**.

It allows users to share pages or content to external platforms such as:

* LinkedIn
* X
* Facebook
* Email

This component centralizes share link generation logic instead of repeating it in each page.

---

## `public/`

Stores **static assets** served directly by Next.js.

Examples:

* profile images
* icons

Example usage:

```tsx
<img src="/profile.jpg" />
```

This references:

```bash
public/profile.jpg
```

---

## Styling

The project uses **Tailwind CSS** for styling.

Utility classes are added directly in JSX, for example:

```tsx
className="text-xl font-bold"
```

This controls:

* spacing
* layout
* typography
* responsiveness

Responsive behavior uses classes like:

```tsx
md:hidden
```

to hide elements on medium screens and above.

---

## Routing

Routing is based on the **Next.js App Router**.

Examples:

* `/` → Homepage
* `/news` → News page
* `/research/projects` → Research Projects
* `/research/lexicon` → Lexicon

Navigation uses:

```tsx
<Link href="/news">
```

or anchors for homepage sections:

```tsx
<Link href="/#skills">
```

---

## Responsiveness

The site is fully responsive with:

* **desktop navbar**
* **tablet dropdown interactions**
* **mobile hamburger menu**

Tailwind breakpoints used:

* `md:` for tablet and desktop
* default styles for mobile

---

## Technologies Used

* **Next.js**
* **React**
* **Tailwind CSS**
* **TypeScript**

---

## Running Locally

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Then open:

```bash
http://localhost:3000
```

---

## Purpose

The purpose of this website is to present:

* academic profile
* research activity
* projects
* professional services
* announcements

in a clean, responsive, and maintainable portfolio format.
