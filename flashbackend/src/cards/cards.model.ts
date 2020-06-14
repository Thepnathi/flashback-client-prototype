import e from "express";

export class Card {
    constructor(
        public id: number,
        public userId: number,
        public content: string,
        public created: Date,
        public lastEdited: Date
         ) {}

}

export class ComplexCard {
    constructor(
        public id: number,
        public userId: number,
        public content: string,
        public category: string[],
        public created: Date,
        public lastEdited: Date
         ) {}

}

export class User {
    constructor(
        public id: number,
        public username: string,
        public firstname: string,
        public surname: string,
        email: string,
        rank: string,
        level: number,
        experiencePoints: number
    ) {}

    calculateUntilNextLevel() {
        
    }
}

export class UserGame {
    public streak: number
}
