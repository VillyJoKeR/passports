import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CheckIcon, ChevronsUpDown } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Country } from "@shared/schema";
import FlagEmoji from "./FlagEmoji";
import { cn } from "@/lib/utils";

interface PassportSelectorProps {
  value: string;
  onChange: (value: string) => void;
  countries: Country[];
  isLoading: boolean;
}

export default function PassportSelector({ value, onChange, countries, isLoading }: PassportSelectorProps) {
  const [open, setOpen] = useState(false);
  
  if (isLoading) {
    return (
      <div className="mb-6">
        <Label className="block text-muted-foreground text-sm mb-2 font-medium">
          Your Passport
        </Label>
        <Skeleton className="w-full h-12 rounded-xl" />
      </div>
    );
  }

  const selectedCountry = countries.find(c => c.code === value);

  return (
    <div className="mb-6">
      <Label className="block text-muted-foreground text-sm mb-2 font-medium">
        Your Passport
      </Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between rounded-xl text-base px-4 py-6 h-auto border-border focus:ring-primary"
          >
            {value && selectedCountry ? (
              <div className="flex items-center">
                <FlagEmoji code={selectedCountry.code} flag={selectedCountry.flag} className="mr-2" />
                <span>{selectedCountry.name}</span>
              </div>
            ) : (
              <span className="text-muted-foreground">Select your passport</span>
            )}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-full min-w-[240px] max-w-[400px] max-h-[300px]">
          <Command>
            <CommandInput placeholder="Search passport country..." />
            <CommandEmpty>No country found.</CommandEmpty>
            <CommandGroup className="max-h-[220px] overflow-y-auto">
              {countries.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.code + " " + country.name}
                  onSelect={() => {
                    onChange(country.code);
                    setOpen(false);
                  }}
                  className="py-3 pl-3"
                >
                  <div className="flex items-center">
                    <FlagEmoji code={country.code} flag={country.flag} className="mr-2" />
                    <span>{country.name}</span>
                  </div>
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === country.code ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
