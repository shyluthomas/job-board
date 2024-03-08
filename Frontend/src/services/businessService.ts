import axiosAuth from "@/utils/axios";

const api = import.meta.env.VITE_API_BASE_URL;

export const businessService = {

  listBusiness: async (): Promise<any> => {
    const response = await axiosAuth.get(`${api}/business`);
    return response?.data.business;
  },
  getBusinessLocations: async (): Promise<any> => {
    const response = await axiosAuth.get(`${api}/location`);
    return response?.data;
  },
  getBusinessClassifications: async (): Promise<any> => {
    const response = await axiosAuth.get(`${api}/classification`);
    return response?.data;
  },
  
};
