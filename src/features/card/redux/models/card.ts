export interface Card {
  identifierCard: number;
  toTaxId: string;
  fullName: string;
  status: number;
  panLastDigits: number;
  isBlocked: boolean;
  flagName: string;
  currentPin?: string;
  pin?: string;
  confirmationPin?: string;
}
