import { Country } from './country.model';

export class Location {
    id: number;
    street: string;
    postalCode: string;
    city: string;
    country: Country;

    constructor(country: Country, city: string, street: string, postalCode: string) {
        this.country = country;
        this.city = city;
        this.street = street;
        this.postalCode = postalCode;
    }
}