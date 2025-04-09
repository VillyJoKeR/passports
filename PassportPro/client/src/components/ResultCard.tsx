import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Country, VisaRequirement } from "@shared/schema";
import FlagEmoji from "./FlagEmoji";
import { ChevronDown } from "lucide-react";

interface ResultCardProps {
  visaRequirement: VisaRequirement;
  countries: Country[];
  onViewMore: () => void;
}

export default function ResultCard({ visaRequirement, countries, onViewMore }: ResultCardProps) {
  const fromCountry = countries.find(c => c.code === visaRequirement.fromCountryCode);
  const toCountry = countries.find(c => c.code === visaRequirement.toCountryCode);

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
  
  // Description based on status
  const getDescription = (status: string) => {
    switch (status) {
      case 'visa-free':
        return `You can stay for up to ${visaRequirement.duration} without a visa`;
      case 'visa-on-arrival':
        return `You can obtain a visa upon arrival for ${visaRequirement.duration}`;
      case 'e-visa':
        return `You need to apply for an e-visa before travel for ${visaRequirement.duration}`;
      case 'visa-required':
        return 'You need to apply for a visa at an embassy/consulate before travel';
      default:
        return 'Visa requirements could not be determined';
    }
  };

  return (
    <Card className="rounded-xl mb-6 overflow-hidden">
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-lg bg-muted">
              <FlagEmoji code={fromCountry.code} flag={fromCountry.flag} />
            </div>
            <div className="text-muted-foreground">→</div>
            <div className="w-8 h-8 rounded-full overflow-hidden flex items-center justify-center text-lg bg-muted">
              <FlagEmoji code={toCountry.code} flag={toCountry.flag} />
            </div>
          </div>
          <div className={`py-1 px-3 rounded-full ${statusStyle.bg} ${statusStyle.text} text-sm font-medium`}>
            {statusStyle.label}
          </div>
        </div>
        
        <h3 className="text-lg font-semibold mb-1">
          {fromCountry.name} citizens to {toCountry.name}
        </h3>
        <p className="text-muted-foreground text-base mb-4">
          {getDescription(visaRequirement.status)}
        </p>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Stay duration</p>
            <p className="font-medium">{visaRequirement.duration || 'N/A'}</p>
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Validity</p>
            <p className="font-medium">{visaRequirement.validity || 'N/A'}</p>
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Processing time</p>
            <p className="font-medium">{visaRequirement.processing || 'N/A'}</p>
          </div>
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm text-muted-foreground mb-1">Cost</p>
            <p className="font-medium">{visaRequirement.cost || 'N/A'}</p>
          </div>
        </div>
        
        <Button 
          variant="ghost" 
          className="w-full text-primary mt-3 font-medium"
          onClick={onViewMore}
        >
          View More Details <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
}
