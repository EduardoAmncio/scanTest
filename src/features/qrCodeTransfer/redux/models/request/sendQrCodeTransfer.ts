export interface SendQrCodeTransferRequest {
  accountId: number;
  userId: number;
  toTaxId: string;
  transferValue: number;
  transferDate: Date | null;
  description: string;
  tags: string[];
}
