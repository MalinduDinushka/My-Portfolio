# Quick Reference: Responsive Breakpoints

## 📱 All Breakpoints at a Glance

| Breakpoint | Devices | Key Changes |
|------------|---------|-------------|
| **320px** | iPhone SE, old phones | Smallest size, base font 14px, 120px image |
| **360px** | Galaxy S5, standard Android | 23px h1, 135px image, compact nav |
| **375px** | iPhone 8/X/11 Pro | 24px h1, 140px image |
| **414px** | iPhone Plus, Pixel | 25px h1, 155px image |
| **480px** | Large phones | 26px h1, 170px image |
| **576px** | Phablets, small tablets | 30px h1, transitional styles |
| **768px** | iPad portrait | Two-column begins, 32px h1, side-by-side |
| **991px** | Tablets landscape | Full desktop layout preview |
| **992px-1199px** | Small desktops | 46px h1, 380px image |
| **1200px+** | Full desktops | 52px h1, 460px image, max layout |

## 🎯 Component Sizes Quick Lookup

### Hero Section
```
Image Sizes:
320px: 120px
360px: 135px  
375px: 140px
414px: 155px
480px: 170px
576px: 180px
768px: 200px
992px: 380px
1200px: 460px

H1 Heading:
320px: 22px
360px: 23px
375px: 24px
414px: 25px
480px: 26px
576px: 28px
768px: 32px
992px: 46px
1200px: 52px
```

### Stats Cards
```
320px: 100px min-width, 22px number
360px: 105px min-width, 23px number
375px: 110px min-width, 24px number
414px: 112px min-width, 26px number
480px: 120px min-width, 28px number
576px: 130px min-width, 30px number
768px: 140px min-width, 32px number
1200px: inline flex, 52px number
```

### Skills Grid
```
320px-480px: 3 columns fixed
576px-767px: 3 columns
768px-991px: auto-fill minmax(75px-90px)
992px+: auto-fill minmax(80px)
```

### Project Numbers
```
320px: 40px
360px: 45px
375px-480px: 50px
576px: 55px
768px: 60px
992px: 90px
1200px: 120px
```

## 💡 Common Patterns Used

### Horizontal Scroll (Mobile Stats)
```css
.stats-section {
  display: flex;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```

### Vertical Stack (Mobile)
```css
/* Banner columns reorder */
.banner-img-col { order: 1; } /* Image first */
.banner-text-col { order: 2; } /* Text second */

@media (min-width: 768px) {
  .banner-img-col { order: 2; } /* Image right */
  .banner-text-col { order: 1; } /* Text left */
}
```

### Responsive Container
```css
.header-img-container {
  width: 100%;
  max-width: 460px; /* Desktop */
  aspect-ratio: 1;
}

@media (max-width: 767px) {
  .header-img-container {
    max-width: 200px; /* Mobile */
  }
}
```

### Flexible Typography
```css
/* Mobile first */
h1 { font-size: 22px; }

/* Scale up for tablets */
@media (min-width: 768px) {
  h1 { font-size: 40px; }
}

/* Full size for desktop */
@media (min-width: 1200px) {
  h1 { font-size: 52px; }
}
```

### Touch-Friendly Buttons
```css
.button {
  min-height: 44px; /* Minimum for touch */
  padding: 12px 20px;
}

@media (max-width: 767px) {
  .button {
    width: 100%; /* Full width on mobile */
    justify-content: center;
  }
}
```

## 🔍 Testing Commands

### Chrome DevTools
```
F12 → Toggle Device Toolbar
Ctrl+Shift+M (Windows) / Cmd+Shift+M (Mac)

Test these widths:
- 320px (iPhone SE)
- 375px (iPhone X)
- 414px (iPhone Plus)
- 768px (iPad)
- 1024px (iPad Landscape)
- 1920px (Desktop)
```

### Viewport Meta Tag (Required)
```html
<meta name="viewport" content="width=device-width, initial-scale=1">
```

## 🎨 CSS Organization Pattern

```css
/* 1. Base/Mobile styles (320px+) */
.element { ... }

/* 2. Intermediate mobile */
@media (max-width: 360px) { ... }
@media (max-width: 375px) { ... }
@media (max-width: 414px) { ... }
@media (max-width: 480px) { ... }

/* 3. Small tablets */
@media (max-width: 576px) { ... }
@media (max-width: 767px) { ... }

/* 4. Tablets */
@media (min-width: 768px) and (max-width: 991px) { ... }
@media (max-width: 991px) { ... }

/* 5. Desktop */
@media (min-width: 992px) and (max-width: 1199px) { ... }
@media (min-width: 1200px) { ... }
```

## ⚠️ Common Pitfalls to Avoid

❌ **Fixed widths without max-width**
```css
/* Bad */
.container { width: 1200px; }

/* Good */
.container {
  width: 100%;
  max-width: 1200px;
}
```

❌ **Images without constraints**
```css
/* Bad */
img { width: 500px; }

/* Good */
img {
  width: 100%;
  max-width: 500px;
  height: auto;
}
```

❌ **Too small touch targets**
```css
/* Bad (mobile) */
button { padding: 5px 10px; } /* Only 30px high */

/* Good (mobile) */
button {
  padding: 12px 20px; /* At least 44px high */
}
```

❌ **Forgetting horizontal scroll prevention**
```css
/* Add to body */
body {
  overflow-x: hidden;
}
```

## 📐 Spacing Scale (Consistent across breakpoints)

```
4px   - Tight spacing
8px   - Small gaps
12px  - Standard gaps (mobile)
16px  - Medium gaps
20px  - Large gaps
24px  - Section spacing (mobile)
32px  - Section spacing
40px  - Large section spacing
60px  - Desktop section spacing
80px  - Major section spacing
```

## 🚀 Performance Tips

1. **Use transform for animations** (GPU accelerated)
   ```css
   /* Good */
   transform: translateY(-5px);
   
   /* Avoid */
   margin-top: -5px;
   ```

2. **Aspect ratio prevents layout shift**
   ```css
   .image-container {
     aspect-ratio: 16/9;
   }
   ```

3. **Optimize images**
   - WebP format for modern browsers
   - Responsive images with `srcset`
   - Lazy loading for below-fold images

---

**Quick Tip:** When in doubt, test on real devices or use Chrome DevTools with network throttling to simulate real-world conditions! 📱✨
