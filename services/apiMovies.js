const { default: axios } = require("axios");


const apiMovies = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    language: 'pt-BR'
  },
  headers: {
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGIyZDY5M2E0YzM3NWI2NzU0ZTNhMTQwNWQyN2EwMyIsInN1YiI6IjY0MzVlMDEwOWFjNTM1MDEwNjI3N2YwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fsxFbXvC2fO7IENt7D8W1G5D4TohHuhX0WdBEdlt5XQ'
  }
})

export default apiMovies