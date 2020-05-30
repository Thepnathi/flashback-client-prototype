export interface User {
    userId: string,
    firstname: string,
    surname: string,
    email: string,
    level: number,
    experiencePoints: number,
}

export const errorUser: User = {
    userId : "Unknown",
    firstname : "Unknown",
    surname : "Unknown",
    email : "Uknown",
    level : -99,
    experiencePoints : 120
} 