import { businessController } from "../../controllers"
import { businessesEntity } from "../../entities"





describe('Business Controller', () => {
    describe("Get Business Sucess", () => {
            const mockResponse =  
        [{
            id: 1,
            username: 'string',
            display_name: 'string',
            classifications: [2],
            locations_served: [4]
        }]

        const Response =  {
            status: 200,
            business:mockResponse
        }
        beforeAll(() => {
            jest.spyOn(businessesEntity, 'listBusinesses').mockResolvedValueOnce(mockResponse)
        })
        it("Get List of business get 200", async () => {
            const business = await businessController.getBusinesses();
            expect(business).toBeTruthy();
            expect(JSON.stringify(business)).toEqual(JSON.stringify(Response));
        })
    })
    describe("Get Business failure", () => {
        const mockResponse:any =  null

    const Response =  {
        status: 404,
        business:mockResponse
    }
    beforeAll(() => {
        jest.spyOn(businessesEntity, 'listBusinesses').mockResolvedValueOnce(mockResponse)
    })
    it("Get List of business get 200", async () => {
        const business = await businessController.getBusinesses();
        expect(business).toBeTruthy();
        expect(JSON.stringify(business)).toEqual(JSON.stringify(Response));
    })
})
})