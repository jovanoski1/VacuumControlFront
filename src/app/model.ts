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
    permissions: Role[];
}

export interface VacuumCleaner{
    id: number;
    name: string;
    status: VacuumStatus;
    active: boolean;
    numOfCycles: number;
}

export interface FilterVacuumCleaner{
    name: string | null;
    status: string | null;
    dateFrom: Date | null;
    dateTo: Date | null;
}

export enum VacuumStatus{
    STOPPED = 'Stopped',
    RUNNING = 'Running',
    DISCHARGING = 'Discharging',
}