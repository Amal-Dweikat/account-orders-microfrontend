import { users } from './mock-data';
import type {User} from "../ models/user.ts";


export class AccountService {

    static login(email: string, password: string): User | null {

        const user = users.find(
            u => u.email === email && u.password === password
        );

        return user ?? null;
    }

    static logout(): void {
        localStorage.removeItem('loggedUser');
    }

    static saveUser(user: User): void {
        localStorage.setItem(
            'loggedUser',
            JSON.stringify(user)
        );
    }

    static getCurrentUser(): User | null {

        const data = localStorage.getItem('loggedUser');

        if (!data) return null;

        return JSON.parse(data);
    }

    static register(user: User){

        users.push(user);

    }
}