import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    constructor() { }

    private isLoggedIn = false

    login(username: string, password: string): boolean {
        if (username === 'admin' && password === '123') {
            this.isLoggedIn = true;
            return true;
        }
        return false
    }

    loggout(): void{
        this.isLoggedIn = false;
    }

    userIsLoggedIn(): boolean {
        return this.isLoggedIn;
    }

}