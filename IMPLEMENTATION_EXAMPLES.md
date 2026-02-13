# SAFAR Morocco Implementation Examples

This guide provides practical examples for using the Morocco adaptation features in your components.

## 📚 Table of Contents
1. [Using Translations](#using-translations)
2. [Using Morocco Configuration](#using-morocco-configuration)
3. [Using Utility Functions](#using-utility-functions)
4. [Building Pages](#building-pages)
5. [Complete Component Examples](#complete-component-examples)

---

## Using Translations

### Basic Example

```tsx
import { useTranslation } from "@/i18n/useTranslation";
import { Button } from "@/components/ui/button";

export function HomePage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("hero.title")}</h1>
      <p>{t("hero.description")}</p>
      <Button>{t("hero.exploreBtn")}</Button>
    </div>
  );
}
```

### Accessing Nested Translations

```tsx
const { t } = useTranslation();

// Access deeply nested translations
const regionName = t("regions.marrakech");
const feature = t("features.aiPlanner.title");
const feature = t("features.aiPlanner.desc");
```

### Dynamic Content with Translations

```tsx
export function FeatureListing() {
  const { t } = useTranslation();

  const features = [
    { key: "aiPlanner", icon: Map },
    { key: "empathyGuide", icon: Heart },
    { key: "timeTravel", icon: History },
  ];

  return (
    <div className="grid gap-4">
      {features.map((f) => (
        <div key={f.key}>
          <h3>{t(`features.${f.key}.title`)}</h3>
          <p>{t(`features.${f.key}.desc`)}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## Using Morocco Configuration

### Accessing Regions

```tsx
import { moroccoConfig } from "@/config/morocco";
import { MapPin } from "lucide-react";

export function RegionsList() {
  return (
    <div>
      {moroccoConfig.regions.map((region) => (
        <div key={region.id}>
          <h3>{region.name}</h3>
          <p>{region.description}</p>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>{region.coordinates[0].toFixed(2)}°, {region.coordinates[1].toFixed(2)}°</span>
          </div>
          <ul>
            {region.attractions.map((attraction) => (
              <li key={attraction}>{attraction}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
```

### Accessing Cultural Elements

```tsx
import { moroccoConfig } from "@/config/morocco";

export function CulturalShowcase() {
  return (
    <div>
      {/* Crafts */}
      <section>
        <h2>Traditional Crafts</h2>
        <ul>
          {moroccoConfig.cultural.artifacts.map((artifact) => (
            <li key={artifact}>{artifact}</li>
          ))}
        </ul>
      </section>

      {/* Traditions */}
      <section>
        <h2>Living Traditions</h2>
        <ul>
          {moroccoConfig.cultural.traditions.map((tradition) => (
            <li key={tradition}>{tradition}</li>
          ))}
        </ul>
      </section>

      {/* Cuisine */}
      <section>
        <h2>Must-Try Cuisine</h2>
        <ul>
          {moroccoConfig.cultural.cuisine.map((dish) => (
            <li key={dish}>{dish}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
```

### Using Currency Information

```tsx
import { moroccoConfig } from "@/config/morocco";

export function PricingInfo() {
  const { symbol, code, name } = moroccoConfig.currency;

  return (
    <div>
      <p>Currency: {name}</p>
      <p>Symbol: {symbol}</p>
      <p>Code: {code}</p>
    </div>
  );
}
```

---

## Using Utility Functions

### Formatting Prices

```tsx
import { formatMADPrice, convertToMAD } from "@/utils/morocco";

export function PricingComponent() {
  const priceUSD = 100;
  const priceMAD = convertToMAD(priceUSD);

  return (
    <div>
      <p>USD: ${priceUSD}</p>
      <p>MAD: {formatMADPrice(priceMAD, "en")}</p>
      <p>MAD (French): {formatMADPrice(priceMAD, "fr")}</p>
      <p>MAD (Arabic): {formatMADPrice(priceMAD, "ar")}</p>
    </div>
  );
}
```

### Finding Regions and Distances

```tsx
import { 
  getRegionById, 
  getSortedRegions, 
  getDistanceBetweenRegions,
  getNearestRegions 
} from "@/utils/morocco";

export function RouteHelper() {
  // Get specific region
  const marrakech = getRegionById("marrakech");

  // Get all regions sorted
  const allRegions = getSortedRegions();

  // Calculate distance between regions
  const distance = getDistanceBetweenRegions("marrakech", "fez");
  console.log(`Distance: ${distance?.toFixed(2)} km`);

  // Find nearest regions
  const nearestToMarrakech = getNearestRegions("marrakech", 3);
  console.log("Nearest regions to Marrakech:");
  nearestToMarrakech.forEach(({ region, distance }) => {
    console.log(`  ${region.name}: ${distance.toFixed(2)} km`);
  });

  return (
    <div>
      <h2>{marrakech?.name}</h2>
      <p>{allRegions.length} regions available</p>
    </div>
  );
}
```

### Building Itineraries

```tsx
import { buildItinerary } from "@/utils/morocco";

export function ItineraryBuilder() {
  // Create itinerary for 4-region tour
  const itinerary = buildItinerary(
    ["marrakech", "essaouira", "fez", "meknes"], 
    2  // 2 days per region
  );

  return (
    <div>
      {itinerary.map((day, idx) => (
        <div key={idx}>
          <strong>Day {day.day}:</strong> {day.region}
          {day.distance && <span> ({day.distance.toFixed(2)} km)</span>}
        </div>
      ))}
    </div>
  );
}
```

### Date Formatting

```tsx
import { formatDateMorocco } from "@/utils/morocco";

export function DateDisplay() {
  const today = new Date();

  return (
    <div>
      <p>English: {formatDateMorocco(today, "en")}</p>
      <p>Français: {formatDateMorocco(today, "fr")}</p>
      <p>العربية: {formatDateMorocco(today, "ar")}</p>
      <p>الدارجة: {formatDateMorocco(today, "dar")}</p>
    </div>
  );
}
```

---

## Complete Component Examples

### Example 1: Region Selector with Distance Calculation

```tsx
import { useState } from "react";
import { 
  getSortedRegions, 
  getDistanceBetweenRegions,
  getNearestRegions 
} from "@/utils/morocco";
import { useTranslation } from "@/i18n/useTranslation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RegionSelector() {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState<string>();
  const regions = getSortedRegions();

  const nearbyRegions = selectedRegion 
    ? getNearestRegions(selectedRegion, 3) 
    : [];

  return (
    <div className="space-y-4">
      <Select value={selectedRegion} onValueChange={setSelectedRegion}>
        <SelectTrigger>
          <SelectValue placeholder="Select a region..." />
        </SelectTrigger>
        <SelectContent>
          {regions.map((region) => (
            <SelectItem key={region.id} value={region.id}>
              {region.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {selectedRegion && (
        <div className="grid gap-2">
          <h3 className="font-semibold">Nearby Regions:</h3>
          {nearbyRegions.map(({ region, distance }) => (
            <div key={region.id} className="p-2 bg-gray-100 rounded">
              <p className="font-medium">{region.name}</p>
              <p className="text-sm text-gray-600">{distance.toFixed(1)} km away</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
```

### Example 2: Multi-Language Features Component

```tsx
import { useTranslation } from "@/i18n/useTranslation";
import { moroccoConfig } from "@/config/morocco";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function FeaturesShowcase() {
  const { t, language } = useTranslation();

  const featureKeys = [
    "aiPlanner",
    "empathyGuide",
    "timeTravel",
    "smartReminders",
    "scanDiscover",
    "offline",
  ] as const;

  return (
    <div>
      <h2>{t("hero.title")}</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featureKeys.map((key) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>
                {t(`features.${key}.title`)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                {t(`features.${key}.desc`)}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
```

### Example 3: Itinerary Planner

```tsx
import { useState } from "react";
import { buildItinerary, getSortedRegions } from "@/utils/morocco";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ItineraryPlanner() {
  const regions = getSortedRegions();
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const itinerary = selectedRegions.length > 0 
    ? buildItinerary(selectedRegions, 1) 
    : [];

  const toggleRegion = (regionId: string) => {
    setSelectedRegions((prev) =>
      prev.includes(regionId)
        ? prev.filter((id) => id !== regionId)
        : [...prev, regionId]
    );
  };

  return (
    <div className="space-y-4">
      {/* Region Selection */}
      <div>
        <h3 className="font-semibold mb-2">Select Regions:</h3>
        <div className="flex flex-wrap gap-2">
          {regions.map((region) => (
            <Badge
              key={region.id}
              variant={selectedRegions.includes(region.id) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => toggleRegion(region.id)}
            >
              {region.name}
            </Badge>
          ))}
        </div>
      </div>

      {/* Itinerary Display */}
      {itinerary.length > 0 && (
        <div className="bg-gray-50 p-4 rounded">
          <h3 className="font-semibold mb-3">Your Itinerary:</h3>
          <div className="space-y-2">
            {itinerary.map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="font-bold text-primary">Day {item.day}</span>
                <span>{item.region}</span>
                {item.distance && (
                  <span className="text-sm text-gray-500">
                    ({item.distance.toFixed(0)} km)
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
```

---

## 🔗 Related Files

- [Morocco Configuration](../src/config/morocco.ts)
- [Morocco Utilities](../src/utils/morocco.ts)
- [Translations](../src/i18n/translations.ts)
- [Morocco Regions Component](../src/components/MoroccoRegions.tsx)
- [Language Switcher](../src/components/LanguageSwitcher.tsx)

## 💡 Tips

1. Always use `useTranslation()` hook for text content
2. Use `moroccoConfig` for data that won't change per language
3. Combine utilities with React components for powerful features
4. Test all languages before deploying
5. Consider RTL layout for Arabic/Darija

## 🚀 Getting Started

1. Start with the basic translation example
2. Add Morocco regions to your pages
3. Use utility functions for distance calculations
4. Build complex features by combining utilities and components

Good luck with your Morocco-adapted application! 🇲🇦
