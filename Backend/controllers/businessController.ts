import { businessesEntity } from "../entities";
import { statusCode } from "../lib";
import { ListBusinessDto, ListBusinessResponseDto } from "../types/businessDto";

export const businessController = {
  getBusinesses: async (): Promise<ListBusinessResponseDto> => {
    const response: ListBusinessDto | null =
      await businessesEntity.listBusinesses();
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, business: null };
    }
    return { status: statusCode.HTTP_SUCESS, business: response };
  },
};
