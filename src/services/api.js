import axios from 'axios';

import { API_ENTRY_POINT, ITEMS_PER_PAGE } from '@/constants';

const req = axios.create({
  baseURL: API_ENTRY_POINT,
});

export async function fetchMovies({
  filters = {},
  limit,
  page,
  sort,
  order,
} = {}) {
  const response = await req.get('movies', {
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
  const response = await req.get('directors');

  return response.data;
}
