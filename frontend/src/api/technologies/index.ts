import ApiService from '@/lib/api-service';

import { ITechnology } from './../../types/index';

const techApi = new ApiService<ITechnology>('/technologies');

export const getAllTechs = async () => {
  const data = await techApi.getList();

  return data;
};
