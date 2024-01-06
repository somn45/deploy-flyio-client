import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface Movie {
  id: string;
  title: string;
  year: number;
  runtime: number;
  summary: string;
  medium_cover_image: string;
}

interface GetMoviesResponse {
  data: {
    movies: Movie[];
  };
}

const MovieList = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(5, 300px);
`;

const Title = styled.h5`
  font-size: 20px;
  font-weight: 600;
`;

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[] | null>(null);
  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getMovies = async () => {
    const response: GetMoviesResponse = await axios.get(
      'http://localhost:3001'
    );
    setMovies(response.data.movies);
    setLoading(false);
  };

  return (
    <div>
      <h1>안녕하세요~ 최근 영화를 소개합니다!</h1>
      <h5>이미지를 클릭 시 영화 상세 정보를 확인할 수 있습니다.</h5>
      <MovieList>
        {loading && <li>영화 리스트 로딩 중...</li>}
        {movies &&
          movies.map((movie) => (
            <li key={movie.id}>
              <Link
                to={`${process.env.PUBLIC_URL}/movies/${movie.id}`}
                state={{ movie }}
              >
                <img src={movie.medium_cover_image} alt={movie.title} />
              </Link>
              <Title>{movie.title}</Title>
            </li>
          ))}
      </MovieList>
    </div>
  );
}
