import Head from "next/head";
import Link from "next/link";
import globalStyles from "../../dist/global.js";
import topmoviesStyles from "../../dist/topmovies.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router.js";
//SHOW MOVIE DETAILS
//SIMILAR TO RESULTS TO GET INFO BUT JUST SHOW A MOVIE

const stringToURL = (movieId, media_type) => {
  ///results?search=
  return `${media_type}info?search=${movieId}`;
};

const Grid = ({ movieId }) => {
  const [data, setData] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    if (movieId) {
      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=c33f0232a6bc04e36368ea053300df40&language=en-US`
      )
        .then((response1) => response1.json())
        .then((json1) => {
          setData(() => json1);
        });

      fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=c33f0232a6bc04e36368ea053300df40&language=en-US`
      )
        .then((response2) => response2.json())
        .then((json2) => {
          setCredits(() => json2);
        });
    }
  }, [movieId]);

  if (!data || !credits || !movieId) return <h2>Error</h2>;

  return (
    <div className="App">
      <div className="container">
        <h1>{data.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          className="poster"
        ></img>
        <p className="rating">Rating:{data.vote_average}</p>
        <p className="rating">Overview : {data.overview}</p>
        <style jsx global>
          {globalStyles}
        </style>
        <style jsx topmovies>
          {topmoviesStyles}
        </style>
      </div>
      <div className="container">
        <h3>Cast:</h3>
        <div className="grid">
          {credits.cast.slice(0, 10).map((item, key) => {
            return (
              <Link
                key={item.id}
                href={stringToURL(item.id, "person")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="card">
                  <h3>{item.name}</h3>
                  <p>Department:{item.known_for_department}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${item.profile_path}`}
                    className="poster"
                  ></img>
                </a>
              </Link>
            );
          })}
          <style jsx global>
            {globalStyles}
          </style>
          <style jsx topmovies>
            {topmoviesStyles}
          </style>
        </div>
      </div>
    </div>
  );
};

export default function Category({ props }) {
  //get Data from URL
  const router = useRouter();

  return (
    <div className="container">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
      <Head>
        <title>router.query.search</title>
      </Head>
      <main>
        <h1>Movie Info</h1>
        <Grid movieId={router.query.search}></Grid>
      </main>

      <footer>
        <Link href="/">
          <button>← Home</button>
        </Link>

        <span class="icon-text">
  <span className="icon">
    <i className="fas fa-home"></i>
  </span>
  <span>Home</span>
</span>
      </footer>

      <style jsx global>
        {globalStyles}
      </style>
      <style jsx topmovies>
        {topmoviesStyles}
      </style>
    </div>
  );
}
