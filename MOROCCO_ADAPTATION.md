# SAFAR - Morocco Adaptation Guide

This document outlines the Morocco-specific adaptations made to the SAFAR AI Tourism application.

## 🌍 Features Implemented

### 1. **Multi-Language Support (i18n)**
The application now supports 4 languages with complete translations:
- **English** (en) - Default
- **French** (fr) - Primary Morocco language
- **Arabic** (ar) - Standard Arabic
- **Darija** (dar) - Moroccan Colloquial Arabic

#### Language Switching
- Click the globe icon in the navigation bar to switch languages
- Language preference is saved to localStorage and persisted across sessions
- Automatic browser language detection on first visit
- RTL support for Arabic and Darija languages

#### Implementation Files:
- [src/i18n/translations.ts](src/i18n/translations.ts) - Translation strings
- [src/i18n/LanguageContext.tsx](src/i18n/LanguageContext.tsx) - Language state management
- [src/i18n/useTranslation.ts](src/i18n/useTranslation.ts) - Translation hook
- [src/components/LanguageSwitcher.tsx](src/components/LanguageSwitcher.tsx) - Language selector UI

### 2. **Morocco-Specific Configuration**
Complete Morocco configuration including:
- 10 major tourist destinations with coordinates
- Regional attraction information
- Cultural elements (crafts, traditions, cuisine, festivals)
- Currency (Moroccan Dirham - MAD)
- Electrical specifications
- Best seasons to visit
- Languages spoken

#### Configuration File:
- [src/config/morocco.ts](src/config/morocco.ts)

#### Covered Regions:
1. **Marrakech** - Imperial City (31.6295°N, 8.0088°W)
2. **Fez** - Cultural Center (34.0333°N, 5.0°W)
3. **Casablanca** - Largest City (33.5731°N, 7.5898°W)
4. **Tangier** - Gateway to Africa (35.7674°N, 5.8369°W)
5. **Essaouira** - Coastal City (31.5085°N, 9.7673°W)
6. **Meknes** - Imperial City (33.8869°N, 5.5472°W)
7. **Chefchaouen** - Blue Pearl (35.1783°N, 5.2689°W)
8. **Agadir** - Beach Resort (30.4204°N, 9.5982°W)
9. **Ouarzazate** - Sahara Gateway (31.926°N, 6.8742°W)
10. **Tetouan** - White Dove (35.5784°N, 5.369°W)

### 3. **Morocco Regions Component**
Interactive showcase of all Morocco regions with:
- Regional cards with coordinates and descriptions
- Top attractions for each region
- Cultural heritage sections (crafts, traditions, cuisine)
- Hover animations and interactive elements

#### Component File:
- [src/components/MoroccoRegions.tsx](src/components/MoroccoRegions.tsx)

## 🗂️ File Structure

```
src/
├── i18n/
│   ├── translations.ts          # All translation strings (EN, FR, AR, DAR)
│   ├── LanguageContext.tsx      # Language state provider
│   └── useTranslation.ts        # Custom hook for translations
├── config/
│   └── morocco.ts               # Morocco-specific configuration
├── components/
│   ├── LanguageSwitcher.tsx     # Language selection dropdown
│   ├── MoroccoRegions.tsx       # Regions showcase component
│   └── Navbar.tsx               # Updated with translations and language switcher
├── App.tsx                      # Updated with LanguageProvider
└── pages/                       # Page components ready for translation
```

## 🚀 How to Use

### Using Translations in Components

```tsx
import { useTranslation } from "@/i18n/useTranslation";

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t("nav.home")}</h1>
      <p>{t("hero.description")}</p>
    </div>
  );
};
```

### Adding New Translations

1. Open [src/i18n/translations.ts](src/i18n/translations.ts)
2. Add your translation keys to each language object:

```typescript
export const translations = {
  en: {
    mySection: {
      title: "My Title",
      description: "My Description"
    }
  },
  fr: {
    mySection: {
      title: "Mon Titre",
      description: "Ma Description"
    }
  },
  // ... repeat for ar and dar
}
```

3. Use in your component:
```tsx
const text = t("mySection.title");
```

### Accessing Morocco Configuration

```typescript
import { moroccoConfig } from "@/config/morocco";

// Access regions
moroccoConfig.regions.forEach(region => {
  console.log(region.name, region.coordinates);
});

// Access currency
console.log(moroccoConfig.currency.code); // "MAD"

// Access cultural elements
moroccoConfig.cultural.artifacts.forEach(artifact => {
  console.log(artifact);
});
```

## 🎨 Text Direction Support

The app automatically handles RTL text direction for Arabic and Darija:
- HTML `dir` attribute is set based on language
- RTL layouts should use CSS flexbox with `flex-row-reverse` for RTL languages
- UI components already support both LTR and RTL

## 📱 Responsive Design

All new components are fully responsive:
- Mobile: Single column layout
- Tablet: 2 column grid
- Desktop: 3 column grid for regions

## 🔄 Browser Language Detection

On first visit, the app automatically detects:
- Browser's preferred language
- Falls back to French if Moroccan audience detected
- Falls back to English if none of the above

## 💾 Persistence

- Language preference is saved to `localStorage` as `safar-language`
- Preference persists across browser sessions
- Can be reset by clearing browser data

## 🌐 Internationalization Best Practices

1. **Always use translation keys**: Never hardcode text
2. **Use consistent key naming**: Use dot notation for nested keys
3. **Keep translations organized**: Group related translations together
4. **Test all languages**: Verify text length and layout in each language
5. **Handle RTL**: Test Arabic/Darija with RTL content

## 📖 Component Integration

### To add MoroccoRegions to a page:

```tsx
import MoroccoRegions from "@/components/MoroccoRegions";

export default function MyPage() {
  return (
    <div>
      <MoroccoRegions />
    </div>
  );
}
```

## 🎯 Future Enhancements

- Add more Morocco-specific activities and experiences
- Integrate real-time currency conversion
- Add Morocco-specific events calendar
- Implement region-specific recommendations in AI modules
- Add local guide information
- Integration with booking systems for Moroccan hotels/services

## 🤝 Contributing

When adding new content:
1. Add translations to all 4 languages
2. Update Morocco configuration if needed
3. Use the `useTranslation()` hook in components
4. Test with all languages before pushing

## 📝 Translation Keys Reference

### Navigation Keys
- `nav.home` - Home
- `nav.about` - About
- `nav.features` - Features
- `nav.howItWorks` - How It Works
- `nav.impact` - Impact
- `nav.team` - Team
- `nav.contact` - Contact
- `nav.demo` - Demo

### Common Keys
- `common.currency` - Moroccan Dirham
- `common.language` - Current Language

### Hero/Home Keys
- `hero.tag` - AI Tourism tag
- `hero.title` - Main title
- `hero.description` - Main description

### Feature Keys
- `features.aiPlanner` - AI Trip Planner
- `features.empathyGuide` - Empathy Guide
- `features.timeTravel` - Time Travel Guide
- `features.smartReminders` - Smart Reminders
- `features.scanDiscover` - Scan & Discover
- `features.offline` - Offline Mode

---

**Last Updated**: February 13, 2026
**Version**: 1.0
**Status**: Production Ready
