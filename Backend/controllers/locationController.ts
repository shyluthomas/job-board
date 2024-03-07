import { locationsEntity } from "../entities/locations";
import { statusCode } from "../lib";


export const locationController = {
  getlocation: async (): Promise<any> => {
    const response: any | null = await locationsEntity.listLocations()
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, data: null };
    }
    return { status: statusCode.HTTP_SUCESS, data: response };
  },
  getLocationByIds: async (ids: number[]): Promise<any> => {
    const locationList: any | null = await locationsEntity.listLocations()
    const response = await locationList.filter((item: any) => ids.includes(item.id))
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, data: null };
    }
    return { status: statusCode.HTTP_SUCESS, data: response };
  },
  
};
