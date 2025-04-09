import { useEffect, useRef } from "react";
import { VisaRequirement, Country } from "@shared/schema";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CheckCircle2, Info, X } from "lucide-react";
import FlagEmoji from "./FlagEmoji";

interface BottomSheetProps {
  visaRequirement: VisaRequirement;
  countries: Country[];
  isOpen: boolean;
  onClose: () => void;
}

export default function BottomSheet({ 
  visaRequirement, 
  countries, 
  isOpen, 
  onClose 
}: BottomSheetProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const fromCountry = countries.find(c => c.code === visaRequirement.fromCountryCode);
  const toCountry = countries.find(c => c.code === visaRequirement.toCountryCode);

  useEffect(() => {
    if (!fromCountry || !toCountry) return;

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (sheetRef.current) {
        sheetRef.current.style.transform = 'translateY(0)';
      }
      if (overlayRef.current) {
        overlayRef.current.style.display = 'block';
      }
    } else {
      document.body.style.overflow = '';
      if (sheetRef.current) {
        sheetRef.current.style.transform = 'translateY(100%)';
      }
      if (overlayRef.current) {
        overlayRef.current.style.display = 'none';
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, fromCountry, toCountry]);

  if (!fromCountry || !toCountry) {
    return null;
  }

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

  const statusStyle = getStatusStyling(visaRequirement.status);
  
  // Default requirements to use if none found
  const defaultRequirements: string[] = [
    "Valid passport with at least 6 months validity beyond stay",
    "Proof of onward/return travel",
    "Sufficient funds for stay"
  ];
  
  // Parse requirements from database or use defaults
  const requirements: string[] = (() => {
    if (!visaRequirement.requirements) {
      return defaultRequirements;
    }
    
    try {
      // If it's already an array, use it directly
      if (Array.isArray(visaRequirement.requirements)) {
        return visaRequirement.requirements as string[];
      } 
      // If it's a string, try to parse it as JSON
      else if (typeof visaRequirement.requirements === 'string') {
        return JSON.parse(visaRequirement.requirements);
      }
      // If it's an object, convert to array of values
      else {
        const reqObj = visaRequirement.requirements as Record<string, unknown>;
        return Object.values(reqObj).map(item => String(item));
      }
    } catch (e) {
      console.error("Error parsing requirements:", e);
      return defaultRequirements;
    }
  })();

  return (
    <>
      <div 
        ref={sheetRef}
        className="bottom-sheet fixed inset-x-0 bottom-0 max-w-md mx-auto h-5/6 bg-background rounded-t-xl shadow-xl z-20 transform translate-y-full transition-transform duration-300 ease-out"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-center py-2">
            <div className="w-10 h-1 bg-muted-foreground/30 rounded-full"></div>
          </div>
          
          <div className="flex justify-between items-center px-4 py-2 border-b">
            <h2 className="text-xl font-semibold">{fromCountry.name} Citizens to {toCountry.name}</h2>
            <button 
              onClick={onClose}
              className="text-primary p-2 rounded-full hover:bg-muted transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center text-2xl mr-3">
                  <FlagEmoji code={fromCountry.code} flag={fromCountry.flag} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{fromCountry.name}</h3>
                  <p className="text-sm text-muted-foreground">Your passport</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-muted flex items-center justify-center text-2xl mr-3">
                  <FlagEmoji code={toCountry.code} flag={toCountry.flag} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">{toCountry.name}</h3>
                  <p className="text-sm text-muted-foreground">Destination country</p>
                </div>
                <div className={`py-1 px-3 rounded-full ${statusStyle.bg} ${statusStyle.text} text-sm font-medium`}>
                  {statusStyle.label}
                </div>
              </div>
            </div>
            
            <div className="bg-muted rounded-xl p-4 mb-6">
              <h3 className="font-semibold mb-2">Entry Requirements</h3>
              <ul className="space-y-3">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle2 className="text-green-500 h-5 w-5 mt-0.5 mr-2 flex-shrink-0" />
                    <span>{req}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Stay Details</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Maximum stay</p>
                  <p className="font-medium">{visaRequirement.duration || 'N/A'}</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Entry type</p>
                  <p className="font-medium">{visaRequirement.validity || 'N/A'}</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Processing</p>
                  <p className="font-medium">{visaRequirement.processing || 'N/A'}</p>
                </div>
                <div className="bg-muted p-3 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-1">Cost</p>
                  <p className="font-medium">{visaRequirement.cost || 'N/A'}</p>
                </div>
              </div>
            </div>
            
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Additional Information</h3>
              <p className="text-muted-foreground mb-3">
                {visaRequirement.notes || `${fromCountry.name} citizens can travel to ${toCountry.name} for tourism, business, or visiting friends/relatives for up to ${visaRequirement.duration} with ${statusStyle.label.toLowerCase()} requirements.`}
              </p>
              
              <div className="bg-primary/10 p-4 rounded-lg">
                <p className="text-primary text-sm flex">
                  <Info className="h-4 w-4 mr-2 mt-0.5" />
                  Information last updated on {visaRequirement.lastUpdated || new Date().toLocaleDateString()}. Visa requirements may change. Verify with the official embassy or consulate before travel.
                </p>
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
      
      <div 
        ref={overlayRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/40 z-10 hidden"
      ></div>
    </>
  );
}
