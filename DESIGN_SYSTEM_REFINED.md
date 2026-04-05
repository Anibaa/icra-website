# 🎨 Refined Design System - ICRA 2026

## Typography Scale (Optimized & Elegant)

### Desktop → Mobile (Fluid & Refined)
```css
--text-xs: clamp(0.688rem, 0.65rem + 0.19vw, 0.813rem);    /* 11px → 13px */
--text-sm: clamp(0.813rem, 0.77rem + 0.22vw, 0.938rem);    /* 13px → 15px */
--text-base: clamp(0.938rem, 0.88rem + 0.29vw, 1.063rem);  /* 15px → 17px */
--text-lg: clamp(1.063rem, 0.99rem + 0.36vw, 1.25rem);     /* 17px → 20px */
--text-xl: clamp(1.188rem, 1.08rem + 0.54vw, 1.5rem);      /* 19px → 24px */
--text-2xl: clamp(1.5rem, 1.32rem + 0.9vw, 2rem);          /* 24px → 32px */
--text-3xl: clamp(1.875rem, 1.58rem + 1.48vw, 2.625rem);   /* 30px → 42px */
--text-4xl: clamp(2.25rem, 1.85rem + 2vw, 3.375rem);       /* 36px → 54px */
--text-5xl: clamp(2.625rem, 2.05rem + 2.88vw, 4.25rem);    /* 42px → 68px */
```

## Spacing Scale (Refined 4px Grid)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

## Component Sizing Standards

### Buttons
- **Small:** h-8 (32px) px-3 text-sm
- **Medium:** h-10 (40px) px-4 text-base
- **Large:** h-12 (48px) px-6 text-lg

### Cards
- **Padding:** p-4 sm:p-5 lg:p-6 (16px → 20px → 24px)
- **Gap:** gap-3 sm:gap-4 lg:gap-5 (12px → 16px → 20px)
- **Border Radius:** rounded-lg (8px) to rounded-xl (12px)

### Sections
- **Padding Y:** py-12 sm:py-16 lg:py-20 (48px → 64px → 80px)
- **Max Width:** max-w-7xl (1280px)
- **Container Padding:** px-4 sm:px-6 lg:px-8

## Refined Principles
1. **4px base unit** - All spacing divisible by 4
2. **Smaller increments** - More refined control
3. **Consistent rhythm** - Predictable spacing
4. **Elegant proportions** - Golden ratio inspired
5. **Mobile-first** - Smaller on mobile, larger on desktop
