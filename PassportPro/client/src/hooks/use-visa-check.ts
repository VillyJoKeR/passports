import { useState } from 'react';
import { VisaRequirement } from '@shared/schema';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

export function useVisaCheck() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<VisaRequirement | null>(null);
  const { toast } = useToast();

  const checkVisa = async (fromCountryCode: string, toCountryCode: string) => {
    if (!fromCountryCode || !toCountryCode) {
      setError('Please select both your passport and destination country');
      toast({
        title: 'Selection Required',
        description: 'Please select both your passport and destination country',
        variant: 'destructive',
      });
      return null;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await apiRequest(
        'GET',
        `/api/visa-requirement?fromCountryCode=${fromCountryCode}&toCountryCode=${toCountryCode}`
      );
      const result = await response.json();
      setData(result);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to check visa requirements';
      setError(errorMessage);
      toast({
        title: 'Error',
        description: errorMessage,
        variant: 'destructive',
      });
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    checkVisa,
    isLoading,
    error,
    data,
  };
}
