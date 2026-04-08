# IEEE Meta Navigation Header & Footer Implementation

## Overview
Complete IEEE-compliant header and footer implementation that follows all IEEE brand guidelines.

## Components

### 1. IEEE Meta Navigation Header (`components/ieee-meta-nav.tsx`)
A smart header that appears only when at the top of the page.

### 2. IEEE Footer (`components/ieee-footer.tsx`)
IEEE-compliant footer with all required administrative links and branding.

## Header Features
✅ Appears only when at the top of the page (scroll < 40px)
✅ Smoothly slides out when scrolling down
✅ Main navbar slides up to take its place
✅ Follows IEEE brand guidelines:
  - Black background (#000000)
  - White text
  - IEEE logo in upper-right corner
  - Minimum 100px × 33px logo size
  - Links to IEEE.org (opens in same window)
  - Proper spacing around logo

## Footer Features
✅ All required IEEE administrative links:
  - Home
  - Sitemap
  - Contact & Support
  - Accessibility
  - Nondiscrimination Policy
  - IEEE Ethics Reporting
  - IEEE Privacy Policy
  - Terms & Disclosures
  - Feedback

✅ Required copyright notice and descriptor
✅ IEEE RAS Tunisia Chapter logo section
✅ 3px top border for visual separation
✅ Full-width layout
✅ Responsive design for mobile devices
✅ Dark mode support

## Pages Updated
Both IEEE header and footer have been added to:
- `app/page.tsx` (Home page)
- `app/program/page.tsx` (Program overview)
- `app/program/[day]/page.tsx` (Program day details)

## Layout Structure
Each page now has:
1. IEEE Meta Nav (top, hides on scroll)
2. Main Navbar (slides up when IEEE nav hides)
3. Page Content
4. Custom Footer (your existing footer)
5. IEEE Footer (required IEEE footer)

## IEEE Brand Compliance

### Header
✅ Black background only
✅ White text and logo
✅ No modifications or distortions
✅ Proper clear space around logo
✅ Links to www.ieee.org
✅ Alt text: "IEEE"
✅ Opens in same window

### Footer
✅ 3px top border for visual separation
✅ All required administrative links
✅ Copyright notice with current year
✅ IEEE descriptor text
✅ Full-width layout
✅ Links to official IEEE policy pages
✅ IEEE RAS Tunisia Chapter branding

## Responsive Design

### Header
- Mobile: Single row, compact layout, smaller text
- Desktop: Full links visible, larger logo

### Footer
- Mobile: Links wrap, stacked layout
- Tablet: Some links hidden for cleaner view
- Desktop: All links visible in single row

## Technical Implementation
- Client-side rendering for optimal performance
- Scroll detection with cleanup
- CSS transitions for smooth animations
- Dynamic year in copyright
- Theme-aware logo display

## Customization

### Adding IEEE Logo Images
To replace text logos with images:
1. Add IEEE logo: `/public/ieee-logo-white.png`
2. Add IEEE RAS logo: `/public/ieee-ras-logo.png`
3. Add IEEE RAS Tunisia logo: `/public/ieee-ras-tunisia-logo.png`
4. Update the Image components in both files

### Modifying Links
All IEEE policy links are required and should not be modified. You can customize:
- Contact email (currently: icra-tep@ieee.tn)
- Home link behavior
- Sitemap link (if you have a custom sitemap)

## Notes
- Header only appears when users are at the top
- Footer is always visible at bottom of page
- All IEEE links open in same window per guidelines
- Copyright year updates automatically
- Fully accessible with proper ARIA labels
