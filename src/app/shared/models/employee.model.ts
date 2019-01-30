import { Job } from './job.model';
import { Department } from './department.model';
import { Passport } from './passport.model';

export class Employee {
    id: number;
    firstName: string;
    job: Job;
    managers: Employee[];
    subworkers: Employee[];
    department: Department;
    passport: Passport;
    registrationDate: string;
}