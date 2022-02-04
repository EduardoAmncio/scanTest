import { TopUpProduct } from "./topUpProduct";

export interface TopUp {
    phoneNumber?: string;
    periodicRepetition?: string;
    topUpDate?: Date;
    originNSU?: string;
    topUpProduct?: TopUpProduct;
    tags?: string[];
}