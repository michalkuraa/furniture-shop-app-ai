export interface UserDTO {
    username: string;
    name: string;
    surname: string;
    email: string;
    pesel: number;
    birthdate: Date;
    city: string;
    postcode: string;
    street: string;
    streetNumber: number;
    localNumber: number;
    roles: string[];
}
