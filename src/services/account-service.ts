import { users } from './mock-data';
import type {User} from "../ models/user.ts";


export class AccountService {

    static login(email: string, password: string): User | null {

        if (!email.trim() || !password.trim()) {
            return null;
        }

        return {
            id: Date.now(),
            name: email.split('@')[0],
            email: email,
            phone: '',
            password: password,
            image: 'https://i.pravatar.cc/150?img=12'
        };
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