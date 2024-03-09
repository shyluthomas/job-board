import supertest from 'supertest';
import { startServer } from '../server';
import { businessController } from '../controllers';


const app = startServer();
describe('Business', () => {
    describe("Get Business", () => {
        it("Get List of business get 200", async () => {
            const business = await businessController.getBusinesses();
            const {statusCode, body} =  await supertest(app).get(`/business`);
            expect(statusCode).toBe(200)
            expect(JSON.stringify(body)).toBe(JSON.stringify(business));
        })
    })
})