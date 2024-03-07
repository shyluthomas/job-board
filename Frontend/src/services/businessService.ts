import axiosAuth from "@/utils/axios";

const api = import.meta.env.VITE_API_BASE_URL;

export const businessService = {

  listBusiness: async (): Promise<any> => {
    const response = await axiosAuth.get(`${api}/business`);
    return response?.data.business;
  },
  getBusinessbyId: async (id: number): Promise<any> => {
    const response = await axiosAuth.get(`${api}/business/${id}`);
    return response?.data;
  },
  
};
