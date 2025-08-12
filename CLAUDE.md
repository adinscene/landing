# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Adinscene is an intelligent video advertising platform built with Astro 5.4.1. It uses AI-powered scene analysis, transcript recognition, and automated content recognition (ACR) to transform video content into smart ad inventory. The platform is actively used by Doğuş Group, PuhuTV, and StarTV.

## Development Commands

```bash
# Install dependencies (using Yarn)
yarn install

# Start development server (runs on port 4321)
yarn dev

# Build for production
yarn build

# Preview production build
yarn preview

# Type checking
yarn check

# Format code with Prettier
yarn format
```

## Architecture & Structure

### Core Technologies
- **Framework**: Astro 5.4.1 with MDX support
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **UI Components**: React 19 for interactive components
- **Content**: Markdown/MDX files in `src/content/`
- **Package Manager**: Yarn 1.22.22

### Content Collections

The site uses Astro Content Collections for structured content:

- `src/content/solutions/` - Solution pages (VOD, Live Content, Shoppable Ads)
- `src/content/features/` - Feature pages (Transcript Recognition, Scene Recognition, ACR)
- `src/content/sections/` - Reusable page sections (banners, CTAs, testimonials)
- `src/content/about/` - About page content
- `src/content/pricing/` - Pricing information
- `src/content/contact/` - Contact page content
- `src/content/blog/` - Blog posts

### Configuration Files

- `src/config/config.json` - Site metadata, logos, navigation button
- `src/config/menu.json` - Navigation structure including mega menu configuration
- `src/config/theme.json` - Theme colors and typography settings

### Page Templates

- `src/pages/solutions/[slug].astro` - Dynamic solution pages with hero, benefits, features, process sections
- `src/pages/features/[slug].astro` - Dynamic feature pages with technical specs, use cases, case studies
- Standard pages use layouts from `src/layouts/`

### Component Architecture

- **Layouts**: `src/layouts/Base.astro` - Main layout wrapper
- **Partials**: Header, Footer, PageHeader, various section components
- **Components**: Reusable UI components (Logo, BlogCard, TeamCard, etc.)
- **Shortcodes**: MDX components (Button, Accordion, Video, Tabs)

### Styling System

- Base styles in `src/styles/` (base.css, components.css, navigation.css, etc.)
- Custom Tailwind plugins in `src/tailwind-plugin/`
- Path aliases configured in tsconfig.json (@/components, @/partials, etc.)

### Mega Menu Implementation

The mega menu is configured in `menu.json` with `hasMegamenu: true`. Categories display vertically with descriptions. Styles are in `navigation.css` with max-width constraints to prevent overflow.

## Key Business Context

Adinscene processes video content through:
1. Content ingestion via API/FTP
2. AI analysis (subtitles via AWS Transcribe, scene detection)
3. Metadata tagging (e.g., "beach scene" at 05:30-05:55)
4. Campaign management with keyword/scene targeting
5. Real-time ad serving with analytics

The platform is built on AWS infrastructure and can integrate with any ad platform.

## Content Guidelines

- Site language: English
- Clients include: Doğuş Group, PuhuTV, StarTV
- Focus areas: VOD monetization, live stream ads, shoppable video ads
- Key technologies: Transcript recognition, scene visual recognition, ACR

## Important Notes

- Logo files: Use `/images/adinscene.svg` (configured in config.json)
- Development server runs on `localhost:4321`
- The project uses sharp for image optimization
- AOS (Animate On Scroll) is integrated for animations
- Site supports mega menu navigation pattern