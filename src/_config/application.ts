export interface Application {
  key: string;
  secret: string;
}

export interface Company {
  address: string;
  appStoreUrl: string;
  email: string;
  name: string;
  phone: string;
  playStoreUrl: string;
  website: string;
  whatsapp?: string;
  youtube?: string;
}
