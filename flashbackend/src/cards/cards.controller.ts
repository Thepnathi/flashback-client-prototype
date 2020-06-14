import { Controller, Post, Body, Get } from "@nestjs/common";
import { CardsService } from "./cards.service";

@Controller('cards')
export class CardsController {
    constructor(private readonly cardsService: CardsService) {}

    @Get()
    getAllCards() {
        return this.cardsService.getAllCards();
    }

    @Post('/new')
    addCard(
        @Body('userId') userId: number,
        @Body('content') content: string
    ) {
        const newCard = this.cardsService.createCard(userId, content);
        return { id: userId}
    }

}