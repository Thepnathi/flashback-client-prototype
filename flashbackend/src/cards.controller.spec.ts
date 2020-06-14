import { CardsController } from './cards/cards.controller';
import { CardsService } from './cards/cards.service';

describe('CardsController', () => {
    let cardsController: CardsController;
    let cardsService: CardsService;

    beforeAll(() => {
        cardsService = new CardsService();
        cardsController = new CardsController(cardsService);
    });

    describe('adds', () => {
        it('adds to two?', async () => {
            expect(1+1).toBeGreaterThan(0);
        })
    })

    describe('new', () => {
        it('should create new card with userId of 123', async () => {
            const result = [{"userId": 123}]
            try {
                const newCard = await cardsService.createCard(123, "Test goes beep boop");
                expect(newCard).toBe(123);
            } catch (err) {
                console.log(`${err}`)
            }

        })
    })
})