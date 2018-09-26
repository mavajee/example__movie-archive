import axios from 'axios';

import { API_ENTRY_POINT, ITEMS_PER_PAGE } from '@/constants';

export const request = axios.create({
  baseURL: API_ENTRY_POINT,
});

export async function fetchMovies({
  filters = {},
  limit,
  page,
  sort,
  order,
} = {}) {
  const response = await request.get('movies', {
    params: {
      _limit: limit,
      _page: page,
      _sort: sort,
      _order: order,
      ...filters,
    },
  });

  return response.data;
}

export async function fetchDirectors() {
  const response = await request.get('directors');

  return response.data;
}
