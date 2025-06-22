# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Jekyll-based static website for RubyConf Taiwan x COSCUP 2025 conference. It's built using Jekyll 4.4.1 with Tailwind CSS for styling, Alpine.js for JavaScript interactivity, and AOS (Animate On Scroll) for animations.

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Serve the site locally with live reload
bundle exec jekyll serve

# Build the site for production
bundle exec jekyll build
```

### CSS Development
The site uses Jekyll Tailwind CSS plugin (`jekyll-tailwindcss`) which automatically processes Tailwind styles defined in `_tailwind.css` using the configuration in `tailwind.config.js`.

## Architecture & Structure

### Jekyll Configuration
- **Main config**: `_config.yml` contains site metadata, plugin configuration, and data for speakers/staff
- **Layout**: Single `default.html` layout in `_layouts/` with Alpine.js integration
- **Content**: Main page is `index.html` with front matter defining schedules and speakers data

### Frontend Stack
- **CSS Framework**: Tailwind CSS with custom color scheme (blue, green, red variants)
- **JavaScript**: Alpine.js for component state management and interactions
- **Animations**: AOS library for scroll-triggered animations
- **Icons**: SVG icons stored in `_includes/icons/`
- **Images**: Background SVGs in `_includes/images/`, photos in `assets/images/`

### Data Structure
The site uses Jekyll front matter in `index.html` to define:
- **Schedules**: Conference schedule with tracks and timing
- **Speakers**: Speaker profiles with images and session details
- **Site config**: Staff information and social links in `_config.yml`

### Key Features
- **Single Page Application**: All content on one scrollable page with smooth section navigation
- **Responsive Design**: Mobile-first with desktop enhancements
- **Interactive Modals**: Speaker details and footer modals using Alpine.js
- **Navigation**: Sticky navigation with active section highlighting
- **Internationalization**: Chinese/English content mixing

### JavaScript Architecture
- `assets/js/main.js`: Initializes AOS animations and integrates with Alpine.js
- Alpine.js components handle:
  - Mobile navigation toggle
  - Section scrolling and active state tracking
  - Modal management for speakers and footer content
  - Scroll position tracking for navigation styling