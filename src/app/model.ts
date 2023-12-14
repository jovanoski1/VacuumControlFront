export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    authorities: string[];
}

export interface NewUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    authorities: string;
}

export interface UpdateUser {
    firstName: string;
    lastName: string;
    email: string;
    authorities: string;
}