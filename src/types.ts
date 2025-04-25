export type PartnershipType = 'partnership' | 'consultation' | 'information' | 'other';

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  type: PartnershipType;
  company?: string;
  sector?: string;
}
 