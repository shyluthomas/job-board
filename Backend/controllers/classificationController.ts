import { businessesEntity } from "../entities";
import { classificationEntity } from "../entities/classification";
import { statusCode } from "../lib";
import { ListBusinessDto, ListBusinessResponseDto } from "../types/businessDto";


export const classificationController = {
  geclassification: async (): Promise<any> => {
    const response: any | null = await classificationEntity.listClassification()
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, data: null };
    }
    return { status: statusCode.HTTP_SUCESS, data: response };
  },

  geclassificationByIds: async (ids: number[]): Promise<any> => {
    const classificatiosList: any | null = await classificationEntity.listClassification()
    const response = await classificatiosList.filter((item: any) => ids.includes(item.id))
    if (!response) {
      return { status: statusCode.HTTP_NOTFOUND, data: null };
    }
    return { status: statusCode.HTTP_SUCESS, data: response };
  },
  
};
