// Local storage keys
const RECENT_SEARCHES_KEY = 'visacheck_recent_searches';
const VERSION_KEY = 'visacheck_data_version';
const LAST_UPDATED_KEY = 'visacheck_last_updated';

// Interface for recent searches stored in localStorage
interface RecentSearch {
  fromCountryCode: string;
  toCountryCode: string;
  status: string;
  searchedAt: string;
}

// Save searches to localStorage
export function saveSearch(searches: RecentSearch[]): void {
  try {
    localStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches));
    localStorage.setItem(LAST_UPDATED_KEY, new Date().toISOString());
  } catch (error) {
    console.error('Error saving searches to localStorage:', error);
  }
}

// Get searches from localStorage
export function getSearches(): RecentSearch[] {
  try {
    const searches = localStorage.getItem(RECENT_SEARCHES_KEY);
    return searches ? JSON.parse(searches) : [];
  } catch (error) {
    console.error('Error retrieving searches from localStorage:', error);
    return [];
  }
}

// Clear searches from localStorage
export function clearSearches(): void {
  try {
    localStorage.removeItem(RECENT_SEARCHES_KEY);
  } catch (error) {
    console.error('Error clearing searches from localStorage:', error);
  }
}

// Set data version (useful for cache invalidation)
export function setDataVersion(version: string): void {
  try {
    localStorage.setItem(VERSION_KEY, version);
  } catch (error) {
    console.error('Error setting data version:', error);
  }
}

// Get data version
export function getDataVersion(): string | null {
  try {
    return localStorage.getItem(VERSION_KEY);
  } catch (error) {
    console.error('Error getting data version:', error);
    return null;
  }
}

// Check if the app is running offline
export function isOffline(): boolean {
  return !navigator.onLine;
}
