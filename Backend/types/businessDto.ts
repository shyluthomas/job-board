export type businessDto = {
  id: number;
  username: string;
  display_name: string;
  classifications: number[];
  locations_served: number[];
};

export type ListBusinessDto = businessDto[];
export type ListBusinessResponseDto = {
  status: number;
  business: businessDto[] | null;
};
