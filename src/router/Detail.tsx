import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Movie } from './Home';

export default function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState<Movie | null>(null);
  const { state } = useLocation();

  useEffect(() => {
    const movie: Movie = state.movie;
    setMovie(movie);
    setLoading(false);
  }, []);

  return (
    <div>
      <Link to="/">{`<= 홈으로`}</Link>
      {loading && <div>영화 상세 정보 로딩 중...</div>}
      {movie && (
        <div>
          <img src={movie.medium_cover_image} alt={movie.title} />
          <h1>{movie.title}</h1>
          <h5>{movie.year}년 개봉</h5>
          <h5>상영 시간 : {movie.runtime}분</h5>
          <h5>줄거리 : </h5>
          <p>{movie.summary}</p>
        </div>
      )}
    </div>
  );
}
