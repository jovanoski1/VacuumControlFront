export interface Role{
    id: number;
    role: string;
}

export interface User {
    userId: number;
    firstName: string;
    lastName: string;
    email: string;
    permissions: Role[];
}

export interface NewUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    permissions: Role[];
}

export interface UpdateUser {
    firstName: string;
    lastName: string;
    email: string;
    permissions: string[];
}