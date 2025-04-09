import { useState, useEffect } from 'react';
import { saveSearch, getSearches } from '@/lib/storage';

interface RecentSearch {
  fromCountryCode: string;
  toCountryCode: string;
  status: string;
  searchedAt?: string;
}

export function useRecentSearches(maxSearches: number = 10) {
  const [searches, setSearches] = useState<RecentSearch[]>([]);

  // Load searches from localStorage on mount
  useEffect(() => {
    const storedSearches = getSearches();
    setSearches(storedSearches);
  }, []);

  // Add a new search
  const addSearch = (search: RecentSearch) => {
    const newSearch = {
      ...search,
      searchedAt: new Date().toISOString()
    };

    // Check if this search already exists
    const existingIndex = searches.findIndex(
      s => s.fromCountryCode === search.fromCountryCode && 
           s.toCountryCode === search.toCountryCode
    );

    let updatedSearches: RecentSearch[];
    
    if (existingIndex !== -1) {
      // Remove the existing search
      updatedSearches = [...searches];
      updatedSearches.splice(existingIndex, 1);
    } else {
      updatedSearches = [...searches];
    }

    // Add new search at the beginning
    updatedSearches = [newSearch, ...updatedSearches];
    
    // Limit to max searches
    if (updatedSearches.length > maxSearches) {
      updatedSearches = updatedSearches.slice(0, maxSearches);
    }

    // Update state and localStorage
    setSearches(updatedSearches);
    saveSearch(updatedSearches);
  };

  // Clear all searches
  const clearSearches = () => {
    setSearches([]);
    saveSearch([]);
  };

  return { searches, addSearch, clearSearches };
}
