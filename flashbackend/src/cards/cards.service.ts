import { Injectable } from '@nestjs/common';
import { Card } from './cards.model';

@Injectable() 
export class CardsService {
    private cards: Card[] = []
    private idCounter = 0;

    getAllCards() {
        return [...this.cards]
    }

    createCard(userId: number, content: string) {
        this.idCounter += 1;
        const card = new Card(this.idCounter, userId, content,
                new Date(), new Date());

        this.cards.push(card);
        return card.id;
    }
}