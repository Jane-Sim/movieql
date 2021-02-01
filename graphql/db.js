import fetch from "node-fetch";

// YTS API에서 영화 정보를 가져온다.
const API_URL = "https://yts.am/api/v2/list_movies.json?";

// 영화를 갸져올 갯수, 평점을 통해 URL의 파라미터에 값을 넘겨 특정 데이터만 가져온다.
export const getMovies = (limit, rating) => {
  // 요청할 Rest API.
  let REQUEST_URL = API_URL;
  // limit 값이 0 이상이면, limit 파리미터를 붙인다.
  if (limit > 0) {
    REQUEST_URL += `limit=${limit}`;
  }
  // rating 값이 0 이상이면, rating 파리미터를 붙인다.
  if (rating > 0) {
    REQUEST_URL += `&minimum_rating=${rating}`;
  }
  // 가져온 데이터를 json 타입으로 변경 후, movies 데이터를 뽑아낸다.
  return fetch(REQUEST_URL)
    .then((res) => res.json())
    .then((json) => json.data.movies);
};
