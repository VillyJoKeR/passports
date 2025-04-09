-- SQL Insert statements for Spanish passport visa requirements

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'us', 'visa-free', '90 days', 'Multiple entry', 'ESTA required', '$21 ESTA fee', 'Spanish passport holders can enter the USA under the Visa Waiver Program (VWP) for up to 90 days for tourism or business. An approved ESTA is required before travel.', '["Valid passport with at least 6 months validity","Approved ESTA (Electronic System for Travel Authorization)","Proof of onward travel","Sufficient funds for stay"]'::jsonb, '2023-10-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ca', 'visa-free', '180 days', 'Multiple entry', 'eTA required', 'CAD$7 eTA fee', 'Spanish citizens need an Electronic Travel Authorization (eTA) to fly to Canada. No visa required for stays up to 6 months.', '["Valid passport","Approved eTA","Proof of sufficient funds"]'::jsonb, '2023-10-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'jp', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Japan for tourism, business, or visiting friends/relatives without a visa for up to 90 days.', '["Valid passport","Proof of onward travel","Sufficient funds for stay"]'::jsonb, '2023-07-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'kr', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter South Korea for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity"]'::jsonb, '2023-09-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'sg', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Singapore for tourism, business, or social purposes without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Proof of sufficient funds","Return or onward ticket"]'::jsonb, '2023-07-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'th', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Thailand for tourism without a visa for up to 30 days (when arriving by air).', '["Valid passport with at least 6 months validity","Proof of onward travel","Proof of sufficient funds (20,000 THB per person)"]'::jsonb, '2023-05-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'my', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Malaysia for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-09-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'mx', 'visa-free', '180 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Mexico for tourism, business, or transit purposes without a visa for up to 180 days.', '["Valid passport","Completed Mexican immigration form (FMM)"]'::jsonb, '2023-09-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'br', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Brazil for tourism for up to 90 days without a visa.', '["Valid passport with at least 6 months validity"]'::jsonb, '2023-09-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ar', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can stay in Argentina without a visa for tourism purposes for up to 90 days.', '["Valid passport"]'::jsonb, '2023-10-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'cl', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Chile for tourism without a visa for up to 90 days.', '["Valid passport","Return ticket"]'::jsonb, '2023-09-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'au', 'e-visa', '90 days', 'Multiple entry', '1-3 business days', 'AUD$20', 'Spanish citizens need to apply for an ETA (Electronic Travel Authority) before traveling to Australia.', '["Valid passport with at least 6 months validity","Online ETA application"]'::jsonb, '2023-07-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'nz', 'e-visa', '90 days', 'Multiple entry', '1-3 business days', 'NZD$23', 'Spanish passport holders need to apply for an NZeTA (New Zealand Electronic Travel Authority) before traveling.', '["Valid passport with at least 3 months validity beyond stay","NZeTA approval confirmation"]'::jsonb, '2023-07-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'gb', 'visa-free', '6 months', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit the UK for up to 6 months without a visa for tourism, business meetings, or visiting friends/family.', '["Valid passport"]'::jsonb, '2023-11-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ae', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens get a 90-day visa on arrival in the UAE for tourism purposes.', '["Valid passport with at least 6 months validity"]'::jsonb, '2023-06-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'cn', 'visa-required', 'Varies by visa type', 'Single or multiple entry', '4-7 business days', '€126.55', 'Spanish citizens need to apply for a visa before traveling to China. Different visa types available depending on the purpose of visit.', '["Valid passport with at least 6 months validity and blank pages","Completed visa application form","Passport photo meeting requirements","Proof of travel arrangements","Invitation letter for some visa types"]'::jsonb, '2023-06-12');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ru', 'visa-required', 'Up to 30 days', 'Single or double entry', '10-20 business days', '€35-€70', 'Spanish citizens need a visa to enter Russia for any purpose. Application should be made through the Russian Visa Center.', '["Valid passport with at least 6 months validity and 2 blank pages","Completed visa application form","Passport-sized photo","Invitation letter or tourist voucher","Travel insurance valid in Russia"]'::jsonb, '2023-08-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'in', 'e-visa', '60 days', 'Double entry', '3-5 business days', 'US$25', 'Spanish passport holders can apply for an e-Tourist visa online before traveling to India.', '["Valid passport with at least 6 months validity","Recent passport photo","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-09-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'za', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit South Africa for tourism without a visa for up to 90 days.', '["Valid passport with at least 30 days validity beyond stay","Proof of onward travel","Proof of sufficient funds"]'::jsonb, '2023-09-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'eg', 'visa-on-arrival', '30 days', 'Single entry', 'Upon arrival', '$25', 'Spanish passport holders can obtain a visa on arrival when entering Egypt through official ports of entry.', '["Valid passport with at least 6 months validity","Return ticket"]'::jsonb, '2023-06-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ma', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Morocco for tourism without a visa for up to 90 days.', '["Valid passport"]'::jsonb, '2023-08-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'tr', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can enter Turkey for tourism or business without a visa for up to 90 days within a 180-day period.', '["Valid passport with at least 6 months validity beyond stay"]'::jsonb, '2023-08-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'fr', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'de', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'it', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'pt', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'nl', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'be', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'gr', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'at', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ch', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Switzerland without a visa for up to 90 days in any 180-day period.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'no', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Norway without a visa for up to 90 days in any 180-day period.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'se', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'fi', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'dk', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'pl', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'cz', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'hu', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ie', 'visa-free', 'Unlimited', 'N/A', 'N/A', 'Free', 'As an EU citizen, Spanish passport holders have the right to free movement within the European Union.', '["Valid passport or national ID card"]'::jsonb, '2023-10-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'vn', 'visa-free', '15 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Vietnam for tourism without a visa for up to 15 days.', '["Valid passport with at least 6 months validity","Return ticket"]'::jsonb, '2023-09-18');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'id', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish citizens can enter Indonesia without a visa for tourism purposes for up to 30 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-09-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ph', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish citizens can enter the Philippines for tourism without a visa for up to 30 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-08-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'cu', 'tourist-card', '30 days', 'Single entry', '1-3 business days', '€25', 'Spanish passport holders need a tourist card (tarjeta del turista) to enter Cuba, which can be purchased before travel.', '["Valid passport with at least 6 months validity","Tourist card","Travel insurance with medical coverage"]'::jsonb, '2023-08-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'do', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish citizens can enter the Dominican Republic without a visa for tourism for up to 30 days.', '["Valid passport","Tourist card (included in airfare)"]'::jsonb, '2023-08-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'hk', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Hong Kong for tourism without a visa for up to 90 days.', '["Valid passport with at least 1 month validity","Proof of sufficient funds","Return ticket"]'::jsonb, '2023-07-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'il', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Israel for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-10-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'qa', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Qatar visa-free for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-08-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'co', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Colombia for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-09-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'pe', 'visa-free', '183 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Peru for tourism without a visa for up to 183 days per year.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-09-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'uy', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Uruguay for tourism without a visa for up to 90 days.', '["Valid passport"]'::jsonb, '2023-09-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'py', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Paraguay for tourism without a visa for up to 90 days.', '["Valid passport"]'::jsonb, '2023-08-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'tw', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Taiwan for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-08-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'lb', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Lebanon for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-08-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'jo', 'visa-on-arrival', '30 days', 'Single entry', 'Upon arrival', 'JOD 40', 'Spanish citizens can obtain a visa on arrival when entering Jordan for tourism.', '["Valid passport with at least 6 months validity","Return ticket"]'::jsonb, '2023-08-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ke', 'e-visa', '90 days', 'Single entry', '3-7 business days', '$51', 'Spanish passport holders need an e-visa to enter Kenya, which must be obtained online before travel.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation","E-visa approval"]'::jsonb, '2023-08-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'tn', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Tunisia for tourism without a visa for up to 90 days.', '["Valid passport with at least 3 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-08-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'dz', 'visa-required', 'Up to 90 days', 'Single or multiple entry', '10-15 business days', '€85', 'Spanish passport holders need to apply for a visa before traveling to Algeria.', '["Valid passport with at least 6 months validity","Visa application form","Passport photos","Invitation letter or hotel reservation"]'::jsonb, '2023-08-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'mu', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can enter Mauritius for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-08-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'kh', 'visa-on-arrival', '30 days', 'Single entry', 'Upon arrival', '$30', 'Spanish passport holders can obtain a tourist visa on arrival in Cambodia.', '["Valid passport with at least 6 months validity","Passport photo","Return ticket","$30 in cash"]'::jsonb, '2023-07-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'np', 'visa-on-arrival', 'Up to 90 days', 'Multiple entry', 'Upon arrival', '$30-$100', 'Spanish citizens can obtain a tourist visa on arrival in Nepal.', '["Valid passport with at least 6 months validity","Passport photo","Visa fee in cash","Proof of sufficient funds"]'::jsonb, '2023-07-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'lk', 'e-visa', '30 days', 'Double entry', '1-2 business days', '$35', 'Spanish passport holders need to apply for an Electronic Travel Authorization (ETA) before traveling to Sri Lanka.', '["Valid passport with at least 6 months validity","Approved ETA","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-07-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'bs', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit the Bahamas for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-09-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'bz', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Belize for tourism without a visa for up to 30 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-09-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'jm', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Jamaica for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-09-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'cr', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Costa Rica for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-09-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'pa', 'visa-free', '180 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Panama for tourism without a visa for up to 180 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-08-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ec', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Ecuador for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket"]'::jsonb, '2023-08-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'bo', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Bolivia for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds","Hotel reservation"]'::jsonb, '2023-08-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 've', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Venezuela for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-08-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'gy', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Guyana for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-08-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'mn', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Mongolia for tourism without a visa for up to 30 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-07-30');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'la', 'visa-on-arrival', '30 days', 'Single entry', 'Upon arrival', '$35', 'Spanish citizens can obtain a visa on arrival in Laos for tourism purposes.', '["Valid passport with at least 6 months validity","2 passport photos","Return ticket","$35 in cash"]'::jsonb, '2023-07-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'mm', 'e-visa', '28 days', 'Single entry', '3 business days', '$50', 'Spanish passport holders need to apply for an e-visa before traveling to Myanmar.', '["Valid passport with at least 6 months validity","Approved e-visa","Return ticket","Proof of accommodation"]'::jsonb, '2023-07-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'uz', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish citizens can enter Uzbekistan for tourism without a visa for up to 30 days.', '["Valid passport with at least 3 months validity","Return ticket"]'::jsonb, '2023-07-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'kg', 'visa-free', '60 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Kyrgyzstan for tourism without a visa for up to 60 days.', '["Valid passport with at least 6 months validity","Registration required for stays over 5 days"]'::jsonb, '2023-07-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'sc', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Seychelles without a visa for up to 90 days.', '["Valid passport","Return ticket","Proof of accommodation","Proof of sufficient funds"]'::jsonb, '2023-07-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'tz', 'e-visa', '90 days', 'Single entry', '10 business days', '$50', 'Spanish passport holders need to apply for an e-visa before traveling to Tanzania.', '["Valid passport with at least 6 months validity","Approved e-visa","Return ticket","Proof of accommodation"]'::jsonb, '2023-07-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'na', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can enter Namibia for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-06-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'bw', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Botswana for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-06-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'gh', 'visa-required', 'Up to 90 days', 'Single or multiple entry', '5-10 business days', '€60', 'Spanish citizens need to apply for a visa before traveling to Ghana.', '["Valid passport with at least 6 months validity","Visa application form","Passport photos","Return ticket","Proof of accommodation"]'::jsonb, '2023-06-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'al', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Albania for tourism without a visa for up to 90 days in any 180-day period.', '["Valid passport"]'::jsonb, '2023-06-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'rs', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Serbia for tourism without a visa for up to 90 days.', '["Valid passport"]'::jsonb, '2023-06-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'me', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Montenegro for tourism without a visa for up to 90 days.', '["Valid passport"]'::jsonb, '2023-06-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'mk', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit North Macedonia for tourism without a visa for up to 90 days.', '["Valid passport"]'::jsonb, '2023-05-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ba', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Bosnia and Herzegovina for tourism without a visa for up to 90 days.', '["Valid passport"]'::jsonb, '2023-05-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'fj', 'visa-free', '120 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Fiji for tourism without a visa for up to 120 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds","Proof of accommodation"]'::jsonb, '2023-05-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'to', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Tonga for tourism without a visa for up to 30 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-05-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ws', 'entry-permit', '90 days', 'Single entry', 'Upon arrival', 'Free', 'Spanish citizens receive an entry permit on arrival in Samoa for stays up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-05-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'vu', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Vanuatu for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-05-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'pg', 'visa-on-arrival', '60 days', 'Single entry', 'Upon arrival', 'PGK 100', 'Spanish citizens can obtain a visa on arrival in Papua New Guinea for tourism purposes.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds","PGK 100 in cash"]'::jsonb, '2023-04-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'om', 'e-visa', '30 days', 'Single entry', '1-3 business days', '20 OMR', 'Spanish passport holders need to apply for an e-visa before traveling to Oman.', '["Valid passport with at least 6 months validity","Approved e-visa","Return ticket","Proof of accommodation"]'::jsonb, '2023-09-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'bh', 'e-visa', '14 days', 'Single entry', '1-3 business days', 'BD 7', 'Spanish citizens need to apply for an e-visa before traveling to Bahrain.', '["Valid passport with at least 6 months validity","Approved e-visa","Return ticket","Proof of accommodation"]'::jsonb, '2023-09-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'kw', 'visa-on-arrival', '90 days', 'Single entry', 'Upon arrival', 'KWD 3', 'Spanish passport holders can obtain a visa on arrival in Kuwait for tourism purposes.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-09-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'mg', 'visa-on-arrival', '90 days', 'Single entry', 'Upon arrival', '€35', 'Spanish citizens can obtain a visa on arrival in Madagascar for tourism purposes.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-09-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'sz', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Eswatini (Swaziland) for tourism without a visa for up to 30 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-08-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ls', 'visa-free', '14 days', 'Single entry', 'N/A', 'Free', 'Spanish citizens can visit Lesotho for tourism without a visa for up to 14 days.', '["Valid passport with at least 6 months validity","Return ticket"]'::jsonb, '2023-08-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'rw', 'visa-on-arrival', '30 days', 'Single entry', 'Upon arrival', '$30', 'Spanish passport holders can obtain a visa on arrival in Rwanda for tourism purposes.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-08-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ug', 'e-visa', '90 days', 'Single entry', '3-5 business days', '$50', 'Spanish citizens need to apply for an e-visa before traveling to Uganda.', '["Valid passport with at least 6 months validity","Approved e-visa","Yellow fever vaccination certificate","Return ticket"]'::jsonb, '2023-08-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'kz', 'visa-free', '30 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Kazakhstan for tourism without a visa for up to 30 days.', '["Valid passport with at least 6 months validity","Registration required for stays over 5 days"]'::jsonb, '2023-08-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'tj', 'e-visa', '45 days', 'Single entry', '3 business days', '$50', 'Spanish citizens need to apply for an e-visa before traveling to Tajikistan.', '["Valid passport with at least 6 months validity","Approved e-visa","Return ticket"]'::jsonb, '2023-08-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'tm', 'visa-required', 'Up to 30 days', 'Single entry', '10-15 business days', '€55', 'Spanish passport holders need to apply for a visa before traveling to Turkmenistan.', '["Valid passport with at least 6 months validity","Visa application form","Invitation letter","Passport photos","Return ticket"]'::jsonb, '2023-07-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'tt', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Trinidad and Tobago for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-07-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'bb', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Barbados for tourism without a visa for up to 90 days.', '["Valid passport","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-07-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'lc', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Saint Lucia for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-07-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'gd', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Grenada for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-07-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ag', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Antigua and Barbuda for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-07-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ua', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Ukraine for tourism without a visa for up to 90 days in any 180-day period.', '["Valid passport"]'::jsonb, '2023-06-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'md', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Moldova for tourism without a visa for up to 90 days in any 180-day period.', '["Valid passport"]'::jsonb, '2023-06-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ge', 'visa-free', '365 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can enter Georgia for tourism without a visa for up to 365 days.', '["Valid passport"]'::jsonb, '2023-06-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'am', 'visa-free', '180 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can visit Armenia for tourism without a visa for up to 180 days.', '["Valid passport"]'::jsonb, '2023-06-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'az', 'e-visa', '30 days', 'Single entry', '3 business days', '$23', 'Spanish passport holders need to apply for an e-visa before traveling to Azerbaijan.', '["Valid passport with at least 6 months validity","Approved e-visa","Return ticket"]'::jsonb, '2023-06-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'gt', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can enter Guatemala for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-06-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'hn', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Honduras for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket"]'::jsonb, '2023-05-25');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'sv', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish citizens can enter El Salvador for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of sufficient funds"]'::jsonb, '2023-05-20');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ni', 'visa-free', '90 days', 'Multiple entry', 'N/A', 'Free', 'Spanish passport holders can visit Nicaragua for tourism without a visa for up to 90 days.', '["Valid passport with at least 6 months validity","Tourist card ($10 fee on arrival)","Return ticket"]'::jsonb, '2023-05-15');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'sr', 'tourist-card', '90 days', 'Multiple entry', 'Upon arrival', '$35', 'Spanish citizens need to purchase a tourist card on arrival in Suriname.', '["Valid passport with at least 6 months validity","Tourist card","Return ticket","Proof of accommodation"]'::jsonb, '2023-05-10');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'ck', 'visa-free', '31 days', 'Single entry', 'N/A', 'Free', 'Spanish passport holders can enter Cook Islands for tourism without a visa for up to 31 days.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-05-05');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'nr', 'visa-required', '30 days', 'Single entry', '5-10 business days', 'AUD$50', 'Spanish citizens need to apply for a visa before traveling to Nauru.', '["Valid passport with at least 6 months validity","Visa application form","Return ticket","Proof of accommodation"]'::jsonb, '2023-05-01');

INSERT INTO visa_requirements (from_country_code, to_country_code, status, duration, validity, processing, cost, notes, requirements, last_updated) VALUES
('es', 'mh', 'visa-on-arrival', '90 days', 'Single entry', 'Upon arrival', '$50', 'Spanish passport holders can obtain a visa on arrival in Marshall Islands for tourism purposes.', '["Valid passport with at least 6 months validity","Return ticket","Proof of accommodation"]'::jsonb, '2023-04-25');

