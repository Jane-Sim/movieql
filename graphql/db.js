let movies = [
  {
    id: 0,
    name: "Seyoung",
    score: 1,
  },
  {
    id: 1,
    name: "Seyoung2",
    score: 1,
  },
  { id: 2, name: "Seyoung3", score: 1 },
  { id: 3, name: "Seyoung4", score: 1 },
  { id: 4, name: "Seyoung5", score: 1 },
];

export const getMovies = () => movies;

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};

export const deleteMovie = (id) => {
  const cleanMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
