import { Reserv } from "./reserv";

export interface Bill {
    id: number;
    reserv: Reserv;
    date: Date; // Assuming date is in ISO format
    days: number;
    total_amount: number;
}
