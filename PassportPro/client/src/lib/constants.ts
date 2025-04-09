// Visa status types
export const VisaStatusTypes = {
  VISA_FREE: 'visa-free',
  VISA_ON_ARRIVAL: 'visa-on-arrival',
  E_VISA: 'e-visa',
  VISA_REQUIRED: 'visa-required',
  UNKNOWN: 'unknown'
};

// Visa status display text
export const VisaStatusText = {
  [VisaStatusTypes.VISA_FREE]: 'Visa-free',
  [VisaStatusTypes.VISA_ON_ARRIVAL]: 'Visa on arrival',
  [VisaStatusTypes.E_VISA]: 'E-visa',
  [VisaStatusTypes.VISA_REQUIRED]: 'Visa required',
  [VisaStatusTypes.UNKNOWN]: 'Unknown'
};

// Visa status colors
export const VisaStatusColors = {
  [VisaStatusTypes.VISA_FREE]: {
    bg: 'bg-green-500/20',
    text: 'text-green-600 dark:text-green-500'
  },
  [VisaStatusTypes.VISA_ON_ARRIVAL]: {
    bg: 'bg-orange-500/20',
    text: 'text-orange-600 dark:text-orange-500'
  },
  [VisaStatusTypes.E_VISA]: {
    bg: 'bg-blue-500/20',
    text: 'text-blue-600 dark:text-blue-500'
  },
  [VisaStatusTypes.VISA_REQUIRED]: {
    bg: 'bg-red-500/20',
    text: 'text-red-600 dark:text-red-500'
  },
  [VisaStatusTypes.UNKNOWN]: {
    bg: 'bg-gray-500/20',
    text: 'text-gray-600 dark:text-gray-400'
  }
};

// Visa status descriptions
export const VisaStatusDescriptions = {
  [VisaStatusTypes.VISA_FREE]: 'You can stay without a visa',
  [VisaStatusTypes.VISA_ON_ARRIVAL]: 'You can obtain a visa upon arrival',
  [VisaStatusTypes.E_VISA]: 'You need to apply for an e-visa before travel',
  [VisaStatusTypes.VISA_REQUIRED]: 'You need to apply for a visa before travel',
  [VisaStatusTypes.UNKNOWN]: 'Requirements could not be determined'
};

// App version
export const APP_VERSION = '1.0.0';

// Data version (increment when visa database is updated)
export const DATA_VERSION = '1.0';

// App metadata
export const APP_METADATA = {
  name: 'VisaCheck',
  description: 'Check visa requirements for your passport nationality',
  author: 'VisaCheck App',
  year: new Date().getFullYear()
};
