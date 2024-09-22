import { State } from "./State.model";

export class Booking {
    cod?: string;
    codFlight?: string;
    bookingDate?: Date;
    state?: State;
}