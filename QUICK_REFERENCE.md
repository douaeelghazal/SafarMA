# SAFAR Morocco - Quick Reference Card

## 🌍 Language Codes
```
en  → English
fr  → French  (Français)
ar  → Arabic  (العربية)
dar → Moroccan Darija (الدارجة)
```

---

## 📝 Using Translations

### Import
```tsx
import { useTranslation } from "@/i18n/useTranslation";
```

### Usage
```tsx
const { t, language } = useTranslation();

<h1>{t("hero.title")}</h1>
<p>{t("features.aiPlanner.desc")}</p>
```

### Common Keys
```
nav.home              nav.about            nav.features
nav.howItWorks        nav.demo             nav.impact
nav.team              nav.contact

hero.tag              hero.title           hero.description
hero.exploreBtn       hero.demoBtn

features.aiPlanner.title        features.aiPlanner.desc
features.empathyGuide.title     features.empathyGuide.desc
features.timeTravel.title       features.timeTravel.desc
features.smartReminders.title   features.smartReminders.desc
features.scanDiscover.title     features.scanDiscover.desc
features.offline.title          features.offline.desc

regions.marrakech    regions.fez     regions.casablanca
regions.tangier      regions.essaouira regions.meknes
regions.chefchaouen  regions.agadir  regions.ouarzazate
regions.tetouan
```

---

## 🗺️ Using Morocco Config

### Import
```tsx
import { moroccoConfig } from "@/config/morocco";
```

### Access Data
```tsx
// All regions
moroccoConfig.regions

// Specific region
moroccoConfig.regions[0]  // or use utils

// Currency
moroccoConfig.currency.code        // "MAD"
moroccoConfig.currency.symbol      // "د.م."

// Cultural elements
moroccoConfig.cultural.artifacts   // Traditional crafts
moroccoConfig.cultural.traditions  // Living traditions
moroccoConfig.cultural.cuisine     // Food specialties
moroccoConfig.cultural.festivals   // Events

// Other info
moroccoConfig.electricity          // 220V, 50Hz
moroccoConfig.languages            // Languages spoken
moroccoConfig.seasons              // Best times to visit
```

---

## 🛠️ Morocco Utilities

### Import
```tsx
import { 
  formatMADPrice, 
  convertToMAD,
  getRegionById,
  getSortedRegions,
  getDistanceBetweenRegions,
  getNearestRegions,
  buildItinerary,
  formatDateMorocco,
  calculateDistance
} from "@/utils/morocco";
```

### Common Functions

#### Currency
```tsx
formatMADPrice(1000, "en")              // "MAD 1,000"
convertToMAD(100, "USD")                // ~1050 MAD
```

#### Regions
```tsx
const region = getRegionById("marrakech");
const allRegions = getSortedRegions();
const distance = getDistanceBetweenRegions("marrakech", "fez");
const nearby = getNearestRegions("marrakech", 3);
```

#### Itineraries
```tsx
buildItinerary(["marrakech", "fez", "casablanca"], 2);
// Returns array of days with regions and distances
```

#### Dates
```tsx
formatDateMorocco(new Date(), "en")     // English
formatDateMorocco(new Date(), "fr")     // French
formatDateMorocco(new Date(), "ar")     // Arabic
```

---

## 🎨 Components

### Language Switcher
```tsx
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

<LanguageSwitcher />  // Dropdown with 4 languages
```

### Morocco Regions
```tsx
import MoroccoRegions from "@/components/MoroccoRegions";

<MoroccoRegions />  // Full regions showcase with animations
```

---

## 🔧 Setup

### 1. Wrap App with LanguageProvider
```tsx
import { LanguageProvider } from "@/i18n/LanguageContext";

<LanguageProvider>
  <App />
</LanguageProvider>
```

### 2. Add LanguageSwitcher to Navbar
```tsx
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

<LanguageSwitcher />
```

### 3. Use Translations in Components
```tsx
import { useTranslation } from "@/i18n/useTranslation";

const { t } = useTranslation();
<h1>{t("nav.home")}</h1>
```

---

## 📊 Morocco Regions

| Region | Coords | Type |
|--------|--------|------|
| Marrakech | 31.63°N, 8.01°W | Imperial |
| Fez | 34.03°N, 5.00°W | Cultural |
| Casablanca | 33.57°N, 7.59°W | Port |
| Tangier | 35.77°N, 5.84°W | Gateway |
| Essaouira | 31.51°N, 9.77°W | Coastal |
| Meknes | 33.89°N, 5.55°W | Imperial |
| Chefchaouen | 35.18°N, 5.27°W | Blue City |
| Agadir | 30.42°N, 9.60°W | Beach |
| Ouarzazate | 31.93°N, 6.87°W | Sahara |
| Tetouan | 35.58°N, 5.37°W | Mediterranean |

---

## 🌐 Text Direction

### Automatic Handling
- **LTR**: English, French
- **RTL**: Arabic, Moroccan Darija

```tsx
// HTML direction is automatically set:
document.documentElement.dir === "rtl"  // for ar, dar
document.documentElement.dir === "ltr"  // for en, fr
```

---

## 💾 localStorage

### Language Persistence
```tsx
localStorage.getItem("safar-language")      // Current language
localStorage.setItem("safar-language", "fr") // Set language
```

---

## 🎯 Common Tasks

### Task 1: Show region name in current language
```tsx
const { t } = useTranslation();
const regionName = t("regions.marrakech");
```

### Task 2: Show price with proper formatting
```tsx
import { formatMADPrice, convertToMAD } from "@/utils/morocco";
const priceMAD = convertToMAD(100, "USD");
const formatted = formatMADPrice(priceMAD, "fr");
```

### Task 3: List all regions with distances
```tsx
import { getNearestRegions } from "@/utils/morocco";
getNearestRegions("marrakech", 10).forEach(({ region, distance }) => {
  console.log(`${region.name}: ${distance.toFixed(1)} km`);
});
```

### Task 4: Switch language programmatically
```tsx
import { useContext } from "react";
import { LanguageContext } from "@/i18n/LanguageContext";

const context = useContext(LanguageContext);
context?.setLanguage("fr");  // Switch to French
```

### Task 5: Translate feature list
```tsx
const { t } = useTranslation();
const features = ["aiPlanner", "empathyGuide", "timeTravel"];
features.map(f => ({
  title: t(`features.${f}.title`),
  desc: t(`features.${f}.desc`)
}));
```

---

## 🚨 Troubleshooting

### Translation not showing?
- Check key spelling: `nav.home` not `nav.Home`
- Use dot notation: `nav.home`, not `nav/home`
- Ensure component is inside LanguageProvider

### Language not switching?
- Check console for errors
- Verify LanguageProvider wraps the app
- Check that LanguageSwitcher is visible

### Region data missing?
- Import from correct path: `@/config/morocco`
- Access with correct property: `moroccoConfig.regions`
- Use getRegionById() for specific regions

---

## 📚 Learn More

- Full Guide: `MOROCCO_ADAPTATION.md`
- Examples: `IMPLEMENTATION_EXAMPLES.md`
- Summary: `CHANGE_SUMMARY.md`
- Config: `src/config/morocco.ts`
- Utilities: `src/utils/morocco.ts`

---

## ⏱️ Performance Tips

✅ DO:
- Use translations at component level
- Cache `useTranslation()` results
- Memoize translated arrays
- Lazy load large components

❌ DON'T:
- Call `useTranslation()` in loops
- Create new objects from translations on every render
- Load all data at once if not needed

---

**Created**: February 13, 2026
**Version**: 1.0
**Status**: Quick Reference v1.0
