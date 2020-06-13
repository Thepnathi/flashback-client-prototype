import { User, errorUser } from "../interface/User";
import { LoggerContext } from './LoggerContext';

class UserLogger {

    private static logger: UserLogger;
    private static userSession: User;
    private static loggerContext: LoggerContext;

    private constructor() {}

    public static initialLogger(user: User): UserLogger {

        this.userSession = user ? user : errorUser;

        if (!UserLogger.logger) {
            UserLogger.logger = new UserLogger();
        }

        this.logger.createUserSession()

        console.log("Start logging with user ", this.userSession.userId);
        return this.logger;
    }

    private createUserSession(): number {
        let userId: number = LoggerContext.newSession(this.userSession);
        return userId;
    }

    private logAction(action: string): void {
        console.log(action);
    }

    private logMessage(message: string): void {
        console.log(message)
    }
    
    private logError(err: string): void {
        console.log(err);
    }
}
