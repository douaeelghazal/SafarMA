import { moroccoConfig } from "@/config/morocco";

/**
 * Format price in Moroccan Dirham
 * @param amount - Amount in MAD
 * @param locale - Language locale (en, fr, ar, dar)
 * @returns Formatted price string
 */
export function formatMADPrice(amount: number, locale: "en" | "fr" | "ar" | "dar" = "en"): string {
  const formatter = new Intl.NumberFormat(
    locale === "en" ? "en-US" : locale === "fr" ? "fr-FR" : "ar-MA",
    {
      style: "currency",
      currency: "MAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }
  );

  return formatter.format(amount);
}

/**
 * Convert amount from one currency to MAD
 * Exchange rates (example - should use real API)
 */
const exchangeRates: Record<string, number> = {
  USD: 10.5,
  EUR: 11.5,
  GBP: 13.2,
  MAD: 1,
};

export function convertToMAD(amount: number, fromCurrency: string = "USD"): number {
  const rate = exchangeRates[fromCurrency.toUpperCase()] || 1;
  return amount * rate;
}

/**
 * Get region by ID
 */
export function getRegionById(id: string) {
  return moroccoConfig.regions.find((r) => r.id === id);
}

/**
 * Get all regions with sorted by name
 */
export function getSortedRegions() {
  return [...moroccoConfig.regions].sort((a, b) => a.name.localeCompare(b.name));
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Earth's radius in km
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Get distance between two regions
 */
export function getDistanceBetweenRegions(regionId1: string, regionId2: string): number | null {
  const region1 = getRegionById(regionId1);
  const region2 = getRegionById(regionId2);

  if (!region1 || !region2) return null;

  return calculateDistance(
    region1.coordinates[0],
    region1.coordinates[1],
    region2.coordinates[0],
    region2.coordinates[1]
  );
}

/**
 * Get nearest regions to a given region
 * @param regionId - ID of the region to find neighbors for
 * @param limit - How many neighbors to return
 */
export function getNearestRegions(regionId: string, limit: number = 3) {
  const currentRegion = getRegionById(regionId);
  if (!currentRegion) return [];

  const distances = moroccoConfig.regions
    .filter((r) => r.id !== regionId)
    .map((region) => ({
      region,
      distance: calculateDistance(
        currentRegion.coordinates[0],
        currentRegion.coordinates[1],
        region.coordinates[0],
        region.coordinates[1]
      ),
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, limit);

  return distances;
}

/**
 * Get best season information
 */
export function getBestSeason() {
  return {
    spring: moroccoConfig.seasons.spring,
    autumn: moroccoConfig.seasons.autumn,
  };
}

/**
 * Format date in Morocco locale
 */
export function formatDateMorocco(date: Date, locale: "en" | "fr" | "ar" | "dar" = "en"): string {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  if (locale === "ar" || locale === "dar") {
    return date.toLocaleDateString("ar-MA", options);
  } else if (locale === "fr") {
    return date.toLocaleDateString("fr-MA", options);
  }
  return date.toLocaleDateString("en-US", options);
}

/**
 * Get electricity information
 */
export function getElectricityInfo() {
  return moroccoConfig.electricity;
}

/**
 * Get time zone info
 */
export function getTimeZoneInfo() {
  return moroccoConfig.timeZone;
}

/**
 * Get all languages spoken in Morocco
 */
export function getLanguagesSpoken() {
  return moroccoConfig.languages;
}

/**
 * Get cultural information by category
 */
export function getCulturalElements(category: "artifacts" | "traditions" | "cuisine" | "festivals") {
  return moroccoConfig.cultural[category];
}

/**
 * Build itinerary for multiple regions
 */
export function buildItinerary(
  regionIds: string[],
  daysPerRegion: number = 1
): Array<{ day: number; region: string; distance?: number }> {
  const itinerary: Array<{ day: number; region: string; distance?: number }> = [];
  let day = 1;

  for (let i = 0; i < regionIds.length; i++) {
    const region = getRegionById(regionIds[i]);
    if (region) {
      itinerary.push({ day, region: region.name });

      // Calculate travel time (add distance info)
      if (i < regionIds.length - 1) {
        const distance = getDistanceBetweenRegions(regionIds[i], regionIds[i + 1]);
        if (distance) {
          itinerary.push({
            day: day + daysPerRegion,
            region: `Travel to ${getRegionById(regionIds[i + 1])?.name || "next region"}`,
            distance,
          });
        }
      }

      day += daysPerRegion;
    }
  }

  return itinerary;
}
