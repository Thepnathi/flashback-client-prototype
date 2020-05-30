import { User, errorUser } from "../interface/User";

class Logger {

    private static logger: Logger;
    private static userSession: User;

    private constructor() {}

    public static initialLogger(user: User): void {

        this.userSession = user ? user : errorUser;

        console.log("Start logging with user ", this.userSession.userId);
    }      

    private logMessage(message: string): void {
        console.log(message);
    }
    
    private logError(err: string): void {
        console.log(err);
    }
}

export {}