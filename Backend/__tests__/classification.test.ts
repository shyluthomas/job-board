import supertest from 'supertest';
import { startServer } from '../server';
import { classificationController } from '../controllers';


const app = startServer();
describe('Classification', () => {
    describe("Get Classification", () => {
        it("Get List of Classification and get 200", async () => {
            const Classification = await classificationController.geclassification();
            const {statusCode, body} =  await supertest(app).get(`/classification`);
            expect(statusCode).toBe(200)
            expect(JSON.stringify(body)).toBe(JSON.stringify(Classification));
        })
    })
})