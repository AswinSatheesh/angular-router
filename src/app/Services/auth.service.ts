import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable({
    providedIn : 'root'
})
export class AuthService{
    isLogged: Boolean = false;
    userService : UserService = inject(UserService);

    login(username: string , password: string){
        let user = this.userService.users.find((usr)=>
            usr.username === username && usr.password === password
        );
        // Without curly braces: The function returns the expression automatically.
        // With curly braces: You need an explicit return statement for the function to return anything.

        if(user === undefined){
            this.isLogged = false;
        }else{
            this.isLogged = true;
        }
        return user;

    }

    logout(){
        this.isLogged = false;
    }

    IsAuthenticated(){
        return this.isLogged;
    }
}