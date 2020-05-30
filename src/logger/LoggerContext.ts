import { User, errorUser } from "../interface/User";
import axios from 'axios';

export class LoggerContext {
    
    private url: string | undefined = process.env.REACT_APP_SERVICE_URL;

    public constructor() {}

    public static newSession(user: User): any {
        axios.get(this.url)
        .then(res => {
            res.data
        })
    }

}
