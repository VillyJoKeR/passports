import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import PassportSelector from "@/components/PassportSelector";
import DestinationSelector from "@/components/DestinationSelector";
import ResultCard from "@/components/ResultCard";
import RecentSearches from "@/components/RecentSearches";
import BottomSheet from "@/components/BottomSheet";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { SearchHistory, VisaRequirement } from "@shared/schema";
import { useRecentSearches } from "@/hooks/use-recent-searches";
import { CheckIcon } from "lucide-react";

export default function Home() {
  const [passport, setPassport] = useState<string>("");
  const [destination, setDestination] = useState<string>("");
  const [showBottomSheet, setShowBottomSheet] = useState(false);
  const [visaRequirement, setVisaRequirement] = useState<VisaRequirement | null>(null);
  const { toast } = useToast();
  const { searches, addSearch } = useRecentSearches();

  // Fetch countries for dropdowns
  const { data: countries, isLoading: isLoadingCountries } = useQuery({
    queryKey: ['/api/countries'],
  });

  // Get recent searches
  const { data: recentSearches, isLoading: isLoadingSearches } = useQuery({
    queryKey: ['/api/recent-searches'],
  });

  const handleCheckVisa = async () => {
    if (!passport || !destination) {
      toast({
        title: "Selection Required",
        description: "Please select both your passport and destination country",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await apiRequest(
        'GET', 
        `/api/visa-requirement?fromCountryCode=${passport}&toCountryCode=${destination}`
      );
      const data = await response.json();
      setVisaRequirement(data);
      
      // Add to recent searches locally
      if (passport && destination) {
        addSearch({
          fromCountryCode: passport,
          toCountryCode: destination,
          status: data.status
        });
      }
    } catch (error) {
      console.error("Error checking visa:", error);
      toast({
        title: "Error",
        description: "Failed to check visa requirements. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleRecentSearchClick = (search: { fromCountryCode: string, toCountryCode: string }) => {
    setPassport(search.fromCountryCode);
    setDestination(search.toCountryCode);
    handleCheckVisa();
  };

  return (
    <div className="max-w-md mx-auto h-screen overflow-hidden relative flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="px-4 pt-14 pb-4 z-10">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">VisaCheck</h1>
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full w-8 h-8"
            onClick={() => window.location.href = '/about'}
          >
            <i className="fas fa-info-circle text-primary"></i>
          </Button>
        </div>
      </header>

      <main className="flex-1 overflow-auto px-4 pb-8">
        <PassportSelector
          value={passport}
          onChange={setPassport}
          countries={countries || []}
          isLoading={isLoadingCountries}
        />

        <DestinationSelector
          value={destination}
          onChange={setDestination}
          countries={countries || []}
          isLoading={isLoadingCountries}
          excludeCode={passport}
        />

        <Button 
          className="w-full mb-8"
          size="lg"
          onClick={handleCheckVisa}
        >
          <CheckIcon className="mr-2 h-4 w-4" /> Check Visa Requirements
        </Button>

        {visaRequirement && (
          <ResultCard 
            visaRequirement={visaRequirement}
            countries={countries || []}
            onViewMore={() => setShowBottomSheet(true)}
          />
        )}

        <RecentSearches
          searches={searches}
          countries={countries || []}
          onSearchClick={handleRecentSearchClick}
          isLoading={isLoadingSearches}
        />
      </main>

      {visaRequirement && (
        <BottomSheet
          visaRequirement={visaRequirement}
          countries={countries || []}
          isOpen={showBottomSheet}
          onClose={() => setShowBottomSheet(false)}
        />
      )}
    </div>
  );
}
