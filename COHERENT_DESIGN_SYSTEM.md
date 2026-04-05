# 🎨 Coherent Design System - All Components

## Typography Hierarchy (Consistent Across All Components)

### Headings
```tsx
// H1 - Hero/Page Titles
className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight"

// H2 - Section Titles  
className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight"

// H3 - Card/Component Titles
className="text-lg sm:text-xl font-bold"

// H4 - Small Titles
className="text-base sm:text-lg font-semibold"

// H5 - Micro Titles
className="text-sm font-semibold"
```

### Body Text
```tsx
// Large Body (Hero descriptions)
className="text-sm sm:text-base lg:text-lg leading-relaxed"

// Standard Body (Section descriptions)
className="text-sm sm:text-base leading-relaxed"

// Small Body (Card descriptions)
className="text-xs sm:text-sm leading-relaxed"

// Micro Text (Labels, badges)
className="text-xs"
```

### Badges & Labels
```tsx
// Standard Badge
className="px-3 py-1.5 rounded-full text-xs font-medium"

// Small Badge
className="px-2.5 py-1 rounded-full text-2xs font-medium"
```

---

## Spacing System (4px Grid)

### Section Padding
```tsx
// All sections use same pattern
className="py-10 sm:py-12 lg:py-16"
// Mobile: 40px, Tablet: 48px, Desktop: 64px
```

### Container Padding
```tsx
// All containers use same pattern
className="px-4 sm:px-6 lg:px-8"
// Mobile: 16px, Tablet: 24px, Desktop: 32px
```

### Grid Gaps
```tsx
// Large gaps (between major sections)
className="gap-6 sm:gap-8 lg:gap-10"

// Medium gaps (between cards)
className="gap-4 sm:gap-5 lg:gap-6"

// Small gaps (within cards)
className="gap-3 sm:gap-4"

// Micro gaps (tight elements)
className="gap-2 sm:gap-2.5"
```

### Vertical Spacing (space-y)
```tsx
// Large spacing
className="space-y-5 sm:space-y-6"

// Medium spacing
className="space-y-4 sm:space-y-5"

// Small spacing
className="space-y-3"

// Micro spacing
className="space-y-2"
```

---

## Component Sizing Standards

### Buttons
```tsx
// Primary CTA
className="px-5 sm:px-6 py-2.5 text-sm rounded-lg"

// Secondary Button
className="px-5 sm:px-6 py-2.5 text-sm rounded-lg"

// Small Button
className="px-4 py-2 text-xs rounded-lg"
```

### Cards
```tsx
// Standard Card
className="p-4 sm:p-5 rounded-lg"

// Large Card
className="p-5 sm:p-6 lg:p-8 rounded-xl"

// Small Card
className="p-3 sm:p-4 rounded-lg"
```

### Icons
```tsx
// Large Icons (Hero, Features)
size={24} // or className="w-6 h-6"

// Standard Icons (Cards)
size={22} // or className="w-5.5 h-5.5"

// Small Icons (Inline)
size={20} // or className="w-5 h-5"

// Micro Icons (Badges)
size={16} // or className="w-4 h-4"
```

---

## Component-by-Component Standards

### Hero Section
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
      <div className="space-y-5 sm:space-y-6">
        {/* Badge */}
        <div className="px-3 py-1.5 text-xs" />
        
        {/* H1 */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
        
        {/* Body */}
        <p className="text-sm sm:text-base" />
        
        {/* Buttons */}
        <div className="flex gap-2.5 sm:gap-3">
          <button className="px-5 sm:px-6 py-2.5 text-sm" />
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-5 sm:gap-6 pt-5 sm:pt-6">
          <div className="text-lg sm:text-xl" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### About Section
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
      <div className="space-y-5 sm:space-y-6">
        {/* Badge */}
        <div className="px-3 py-1.5 text-xs" />
        
        {/* H2 */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl" />
        
        {/* Body */}
        <p className="text-sm sm:text-base" />
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-lg sm:text-xl" />
        </div>
      </div>
      
      {/* Feature Cards */}
      <div className="space-y-3">
        <div className="p-4 rounded-lg">
          <div className="flex gap-3">
            <Icon size={22} />
            <div>
              <h3 className="text-sm font-semibold" />
              <p className="text-xs" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### Speakers Section
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" />
      <p className="text-sm sm:text-base" />
    </div>
    
    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      <div className="p-4 sm:p-5 rounded-lg">
        <div className="space-y-3">
          {/* Avatar */}
          <div className="w-16 h-16 sm:w-20 sm:h-20" />
          
          {/* Content */}
          <div>
            <h3 className="text-base sm:text-lg" />
            <p className="text-xs sm:text-sm" />
          </div>
          
          {/* Button */}
          <button className="px-4 py-2 text-xs" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### Program Timeline
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" />
      <p className="text-sm sm:text-base" />
    </div>
    
    {/* Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      <div className="p-4 sm:p-5 rounded-xl">
        <div className="space-y-3">
          <div className="text-xs" /> {/* Day label */}
          <h3 className="text-base sm:text-lg" />
          <ul className="space-y-2">
            <li className="text-xs sm:text-sm" />
          </ul>
          <button className="px-4 py-2 text-xs" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### Countdown Timer
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="p-5 sm:p-8 lg:p-10 rounded-2xl">
      <div className="space-y-5 sm:space-y-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl" />
        
        {/* Countdown Grid */}
        <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
          <div className="p-4 sm:p-5 rounded-lg">
            <div className="text-3xl sm:text-4xl" />
            <div className="text-xs" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

### CTA Section
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="p-5 sm:p-8 lg:p-10 rounded-xl text-center">
      <div className="space-y-5 sm:space-y-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl" />
        
        {/* Description */}
        <p className="text-sm sm:text-base" />
        
        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Icon size={24} />
            <p className="text-sm" />
          </div>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm" />
        </div>
      </div>
    </div>
  </div>
</section>
```

### Committee Section
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" />
      <p className="text-sm sm:text-base" />
    </div>
    
    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
      <div className="p-4 sm:p-5 rounded-lg text-center">
        <div className="px-2.5 py-1 text-xs mb-3" /> {/* Role badge */}
        <h3 className="text-sm sm:text-base font-bold mb-1" />
        <p className="text-xs sm:text-sm" />
      </div>
    </div>
  </div>
</section>
```

### Partners Section
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" />
      <p className="text-sm sm:text-base" />
    </div>
    
    {/* Grid */}
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      <div className="p-4 sm:p-5 rounded-lg text-center min-h-28 sm:min-h-32">
        <h3 className="text-sm sm:text-base font-bold" />
        <p className="text-xs" />
      </div>
    </div>
  </div>
</section>
```

### FAQ Section
```tsx
<section className="py-10 sm:py-12 lg:py-16">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-8 sm:mb-10">
      <h2 className="text-2xl sm:text-3xl md:text-4xl mb-3" />
      <p className="text-sm sm:text-base" />
    </div>
    
    {/* Accordion */}
    <div className="space-y-3">
      <div className="p-4 sm:p-5 rounded-lg">
        <button className="text-sm sm:text-base font-semibold" />
        <div className="text-xs sm:text-sm" />
      </div>
    </div>
  </div>
</section>
```

### Footer
```tsx
<footer className="py-10 sm:py-12">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
      <div>
        <h4 className="text-sm sm:text-base font-semibold mb-3" />
        <ul className="space-y-2">
          <li className="text-xs sm:text-sm" />
        </ul>
      </div>
    </div>
  </div>
</footer>
```

---

## Color System (Consistent)

### Text Colors
```tsx
// Primary text
className="text-gray-900 dark:text-white"

// Secondary text
className="text-gray-700 dark:text-gray-300"

// Tertiary text
className="text-gray-600 dark:text-gray-400"

// Muted text
className="text-gray-500 dark:text-gray-500"
```

### Brand Colors
```tsx
// Primary brand (red)
style={{ backgroundColor: '#f20136' }}
className="text-red-500 dark:text-red-400"

// Secondary (cyan)
className="text-cyan-600 dark:text-cyan-400"

// Accent (purple)
className="text-purple-600 dark:text-purple-400"
```

### Background Effects
```tsx
// Subtle glow
className="bg-cyan-500/8"
className="bg-purple-600/8"
className="bg-red-600/8"

// Border
className="border-cyan-500/30"
className="border-red-500/20"
```

---

## Border Radius (Consistent)

```tsx
// Small elements (badges, small buttons)
className="rounded-lg"  // 8px

// Medium elements (cards, buttons)
className="rounded-lg"  // 8px

// Large elements (sections, modals)
className="rounded-xl"  // 12px

// Extra large (hero cards)
className="rounded-2xl" // 16px

// Pills (badges, tags)
className="rounded-full"
```

---

## Hover States (Consistent)

```tsx
// Buttons
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}

// Cards
whileHover={{ scale: 1.02 }}
whileHover={{ y: -4 }}

// Icons
className="group-hover:scale-105 transition-transform"

// Borders
className="hover:border-red-500/20"
```

---

## Animation Timing (Consistent)

```tsx
// Fast interactions
transition={{ duration: 0.2 }}

// Standard animations
transition={{ duration: 0.3 }}

// Smooth entrances
transition={{ duration: 0.7 }}

// Stagger delays
transition={{ delay: index * 0.08 }}
```

---

## Responsive Breakpoints

```tsx
// Mobile: < 640px (default)
// Tablet: 640px+ (sm:)
// Desktop: 1024px+ (lg:)
// Large: 1280px+ (xl:) - rarely used

// Pattern:
className="text-sm sm:text-base lg:text-lg"
className="p-4 sm:p-5 lg:p-6"
className="gap-3 sm:gap-4 lg:gap-5"
```

---

## Quick Reference Card

```
SECTIONS:     py-10 sm:py-12 lg:py-16
CONTAINERS:   px-4 sm:px-6 lg:px-8
MAX-WIDTH:    max-w-7xl

H1:           text-3xl sm:text-4xl md:text-5xl lg:text-6xl
H2:           text-2xl sm:text-3xl md:text-4xl
H3:           text-lg sm:text-xl
BODY:         text-sm sm:text-base
SMALL:        text-xs sm:text-sm

BUTTONS:      px-5 sm:px-6 py-2.5 text-sm
CARDS:        p-4 sm:p-5 rounded-lg
ICONS:        size={22}

GAPS:         gap-4 sm:gap-5 lg:gap-6
SPACE-Y:      space-y-5 sm:space-y-6
GRID-COLS:    grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
```

---

This coherent design system ensures all components feel unified and professional!
