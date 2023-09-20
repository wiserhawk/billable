export class Billable {
}

export interface User {
    name: string;
    surname?: string;
    username: string;
    email: string;
    password: string;
}

export interface Credential {
    username: string;
    password: string;
}

export interface Organization {
    name?: string;
    address?: Address;
    clientType?: string;
    gstin?: string;
    logo?: string;
}

export interface Address {
    toName?: string;
    line1?: string;
    line2?: string;
    city?: string;
    state?: string;
    pincode?: string;
    phone?: string;
    emailId?: string;
}

