import { Room } from "./room";

export interface Reserv {
    id: number;
    room: Room;
    quantityPeople: number;
    checkIn: string;
    checkOut: string;
    state: string;
}
