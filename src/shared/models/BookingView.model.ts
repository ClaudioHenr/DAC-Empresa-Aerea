import { Flight } from "./Flight.model";

export class BookingView {
    id?: string;
    codBooking?: string;
    codFlight?: string;
    timeBooking?: Date;
    status?: string;
    idUser?: string;
    flightDetails?: Flight | null; 
}