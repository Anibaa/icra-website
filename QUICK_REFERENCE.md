# ⚡ Quick Reference Guide - Premium UI System

## 🎨 Common Classes

### Cards
```tsx
premium-card                    // Base card with hover
premium-card-interactive        // Interactive card with enhanced hover
glass                          // Glass morphism
glass-premium                  // Enhanced glass effect
```

### Buttons
```tsx
<Button variant="default">Default</Button>
<Button variant="premium">Premium Gradient</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>
```

### Animations
```tsx
fade-in                        // Fade in
fade-in-up                     // Fade in with upward motion
scale-in                       // Scale in
shimmer                        // Shimmer effect
pulse-premium                  // Pulse animation
bounce-premium                 // Bounce animation
animate-float                  // Floating animation
unified-hover                  // Consistent hover lift
```

### Effects
```tsx
gradient-text                  // Gradient text
gradient-border                // Gradient border
metallic                       // Metallic surface
holographic                    // Holographic effect
robot-glow-soft                // Soft glow
brand-red-glow                 // Brand red glow
```

### Loading
```tsx
skeleton                       // Skeleton loading
loader                         // Spinner
```

---

## 📏 Spacing (4px/8px system)

```tsx
gap-1    // 4px
gap-2    // 8px
gap-4    // 16px
gap-6    // 24px
gap-8    // 32px
gap-12   // 48px
gap-16   // 64px

p-4      // padding: 16px
p-6      // padding: 24px
p-8      // padding: 32px

m-4      // margin: 16px
m-6      // margin: 24px
m-8      // margin: 32px
```

---

## 🎯 Typography

### Headings
```tsx
text-6xl font-bold             // H1 (60px)
text-5xl font-bold             // H1 (48px)
text-4xl font-semibold         // H2 (36px)
text-3xl font-semibold         // H3 (30px)
text-2xl font-semibold         // H4 (24px)
text-xl font-semibold          // H5 (20px)
text-lg font-semibold          // H6 (18px)
```

### Body Text
```tsx
text-base                      // 16px (default)
text-sm                        // 14px
text-xs                        // 12px
text-lg                        // 18px
```

### Colors
```tsx
text-foreground                // Primary text
text-muted-foreground          // Secondary text
text-primary                   // Brand purple
text-accent                    // Brand cyan
```

---

## 🎨 Colors

### Backgrounds
```tsx
bg-background                  // Page background
bg-card                        // Card background
bg-muted                       // Muted background
bg-primary                     // Primary brand
bg-accent                      // Accent brand
```

### Borders
```tsx
border-border                  // Default border
border-input-border            // Input border
border-primary                 // Primary border
```

---

## 🔲 Border Radius

```tsx
rounded-sm                     // 8px
rounded-md                     // 12px
rounded-lg                     // 16px
rounded-xl                     // 24px
rounded-2xl                    // 32px
rounded-full                   // Fully rounded
```

---

## 🌟 Shadows

```tsx
shadow-xs                      // Minimal shadow
shadow-sm                      // Small shadow
shadow-md                      // Medium shadow
shadow-lg                      // Large shadow
shadow-xl                      // Extra large shadow
shadow-2xl                     // Maximum shadow
```

---

## 📱 Responsive

```tsx
// Mobile first
<div className="p-4 md:p-6 lg:p-8">

// Hide on mobile
<div className="hidden md:block">

// Show only on mobile
<div className="block md:hidden">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

---

## 🎯 Common Patterns

### Hero Section
```tsx
<section className="py-20 lg:py-32">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-5xl lg:text-6xl font-bold mb-6">
      Title
    </h1>
    <p className="text-lg text-muted-foreground mb-8">
      Description
    </p>
    <Button variant="premium" size="xl">
      CTA
    </Button>
  </div>
</section>
```

### Feature Card
```tsx
<div className="premium-card-interactive p-6">
  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
    <Icon className="w-6 h-6 text-primary" />
  </div>
  <h3 className="text-xl font-semibold mb-2">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>
```

### Form Input
```tsx
<div>
  <label className="block text-sm font-medium mb-2">
    Label
  </label>
  <Input 
    type="text" 
    placeholder="Placeholder"
    className="w-full"
  />
</div>
```

### Stats
```tsx
<div className="text-center">
  <div className="text-4xl font-bold gradient-text mb-2">
    100+
  </div>
  <div className="text-sm text-muted-foreground">
    Label
  </div>
</div>
```

---

## ⚡ Performance Tips

- Use `transform` and `opacity` for animations
- Lazy load images with Next.js Image
- Use CSS variables for theming
- Minimize custom CSS

---

## ♿ Accessibility

- Always add `alt` text to images
- Use semantic HTML
- Ensure keyboard navigation
- Test with screen readers
- Maintain color contrast

---

## 🎨 Theme Colors

### Light Mode
- Background: Very light gray
- Foreground: Dark charcoal
- Primary: Purple
- Accent: Cyan

### Dark Mode
- Background: Soft dark (not pure black)
- Foreground: Soft white
- Primary: Brighter purple
- Accent: Brighter cyan

---

## 📦 Component Imports

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
```

---

## 🔧 Utility Functions

```tsx
import { cn } from '@/lib/utils'

// Merge classes
<div className={cn('base-class', condition && 'conditional-class')}>
```

---

## 🎯 CSS Variables

```css
var(--background)
var(--foreground)
var(--card)
var(--primary)
var(--accent)
var(--border)
var(--radius-lg)
var(--spacing-md)
var(--shadow-lg)
```

---

## 📚 Full Documentation

- [Premium Design System](./PREMIUM_DESIGN_SYSTEM.md)
- [Implementation Guide](./PREMIUM_UI_IMPLEMENTATION_GUIDE.md)

---

**Happy coding! 🚀**
