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
  const response = await axios(`/movie/${id}`, {
    params: {
      api_key: KEY,
      append_to_response: 'videos',
    },
  });
  return response.data.results;
}
// https://api.themoviedb.org/3/trending/all/day?api_key=16bfd7302118df957168aab71a34a8e2
// https://api.themoviedb.org/3/?api_key=16bfd7302118df957168aab71a34a8e2
