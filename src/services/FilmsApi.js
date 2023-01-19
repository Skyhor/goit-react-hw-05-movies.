import axios from 'axios';
const KEY = '16bfd7302118df957168aab71a34a8e2';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
export async function FilmsApi() {
  const response = await axios('trending/movie/day', {
    params: {
      api_key: KEY,
    },
  });
  return response.data.results;
}
export async function fetchEventById(id) {
  const response = await axios(`movie/${id}`, {
    params: {
      api_key: KEY,
    },
  });
  return response.data;
}

export async function SearchFilms(query, page) {
  const response = await axios(`search/movie`, {
    params: {
      api_key: KEY,
      query,
      page,
    },
  });
  return response.data;
}

export async function ActorWarehouseApp(id) {
  const response = await axios(`movie/${id}/credits`, {
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return response.data.cast;
}
// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>

export async function ReviewsApp(id) {
  const response = await axios(`movie/${id}/reviews`, {
    params: {
      api_key: KEY,
      // language: 'en-US',
    },
  });
  return response.data.results;
}
// actor's warehouse
// Reviews;
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
