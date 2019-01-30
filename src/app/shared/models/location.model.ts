import { Country } from './country.model';

export class Location {
    id: number;
    street: string;
    postalCode: string;
    city: string;
    country: Country;
}