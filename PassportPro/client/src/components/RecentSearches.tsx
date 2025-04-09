import { Skeleton } from "@/components/ui/skeleton";
import { Country, SearchHistory } from "@shared/schema";
import FlagEmoji from "./FlagEmoji";

interface RecentSearchesProps {
  searches: { 
    fromCountryCode: string, 
    toCountryCode: string,
    status: string
  }[];
  countries: Country[];
  onSearchClick: (search: { fromCountryCode: string, toCountryCode: string }) => void;
  isLoading: boolean;
}

export default function RecentSearches({ 
  searches, 
  countries, 
  onSearchClick,
  isLoading
}: RecentSearchesProps) {
  // Status styling
  const getStatusStyling = (status: string) => {
    switch (status) {
      case 'visa-free':
        return { 
          bg: 'bg-green-500/20', 
          text: 'text-green-600 dark:text-green-500',
          label: 'Visa-free'
        };
      case 'visa-on-arrival':
        return { 
          bg: 'bg-orange-500/20', 
          text: 'text-orange-600 dark:text-orange-500',
          label: 'Visa on arrival'
        };
      case 'e-visa':
        return { 
          bg: 'bg-blue-500/20', 
          text: 'text-blue-600 dark:text-blue-500',
          label: 'E-visa'
        };
      case 'visa-required':
        return { 
          bg: 'bg-red-500/20', 
          text: 'text-red-600 dark:text-red-500',
          label: 'Visa required'
        };
      default:
        return { 
          bg: 'bg-gray-500/20', 
          text: 'text-gray-600 dark:text-gray-400',
          label: 'Unknown'
        };
    }
  };

  if (isLoading) {
    return (
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Recent Searches</h2>
        {[1, 2, 3].map((i) => (
          <Skeleton key={i} className="w-full h-16 rounded-xl mb-3" />
        ))}
      </div>
    );
  }

  if (searches.length === 0) {
    return (
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-3">Recent Searches</h2>
        <div className="text-center p-6 text-muted-foreground bg-card rounded-xl border">
          No recent searches yet
        </div>
      </div>
    );
  }

  return (
    <div className="mb-6">
      <h2 className="text-lg font-semibold mb-3">Recent Searches</h2>
      
      {searches.map((search, index) => {
        const fromCountry = countries.find(c => c.code === search.fromCountryCode);
        const toCountry = countries.find(c => c.code === search.toCountryCode);
        
        if (!fromCountry || !toCountry) return null;
        
        const statusStyle = getStatusStyling(search.status);
        
        return (
          <div 
            key={index}
            className="mb-3 p-4 bg-card rounded-xl border flex items-center justify-between cursor-pointer hover:bg-accent/50 transition-colors"
            onClick={() => onSearchClick(search)}
          >
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <FlagEmoji code={fromCountry.code} flag={fromCountry.flag} />
                <span className="text-muted-foreground">→</span>
                <FlagEmoji code={toCountry.code} flag={toCountry.flag} />
              </div>
              <span className="text-sm text-muted-foreground">
                {fromCountry.name.length > 8 ? `${fromCountry.name.slice(0, 8)}...` : fromCountry.name} to {toCountry.name.length > 8 ? `${toCountry.name.slice(0, 8)}...` : toCountry.name}
              </span>
            </div>
            <div className={`py-1 px-3 rounded-full ${statusStyle.bg} ${statusStyle.text} text-xs font-medium`}>
              {statusStyle.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
