import Head from "next/head";
import Link from "next/link";
import globalStyles from "../../dist/global.js";
import topmoviesStyles from "../../dist/topmovies.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//SHOW MOVIE DETAILS
//SIMILAR TO RESULTS TO GET INFO BUT JUST SHOW A MOVIE

const stringToURL = (personId, media_type) => {
  ///results?search=
  return `${media_type}info?search=${personId}`;
};

const Title = ({title}) => <h1 className="title">{title}</h1>;

const Grid = ({ personId }) => {
  const [data, setData] = useState(null);
  const [tvcredits, setTVCredits] = useState(null);
  const [moviecredits, setMovieCredits] = useState(null);

  useEffect(() => {
    if (personId) {
      fetch(
        `https://api.themoviedb.org/3/person/${personId}?api_key=c33f0232a6bc04e36368ea053300df40`
      )
        .then((response1) => response1.json())
        .then((json1) => {
          setData(() => json1);
        });

      fetch(
        `https://api.themoviedb.org/3/person/${personId}/tv_credits?api_key=c33f0232a6bc04e36368ea053300df40`
      )
        .then((response2) => response2.json())
        .then((json2) => {
          setTVCredits(() => json2);
        });

      fetch(
        `https://api.themoviedb.org/3/person/${personId}/movie_credits?api_key=c33f0232a6bc04e36368ea053300df40`
      )
        .then((response3) => response3.json())
        .then((json3) => {
          setMovieCredits(() => json3);
        });
    }
  }, [personId]);

  if (!data || !tvcredits || !moviecredits || !personId) return <h2>Error</h2>;
  return (
    <div className="App">
      <div className="container">
        <Title title={data.name}/>
        <img
          src={`https://image.tmdb.org/t/p/w500${data.profile_path}`}
          className="poster"
        ></img>
        <p className="rating">Department : {data.known_for_department}</p>
        <p className="rating">Popularity:{data.popularity}</p>
        <p className="rating">Country : {data.place_of_birth}</p>
      </div>

      <div className="container">
        <Title title="Movie Credits:"/>
        <div className="grid">
          {moviecredits.cast.slice(0, 5).map((item, key) => {
            return (
              <Link
                key={item.id}
                href={stringToURL(item.id, "movie")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="card">
                  <h3>{item.title}</h3>
                  <p>Rating:{item.vote_average}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                    className="poster"
                  ></img>
                </a>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="container">
        <Title title="TV Credits:"/>
        <div className="grid">
          {tvcredits.cast.slice(0, 5).map((item, key) => {
            return (
              <Link
                key={item.id}
                href={stringToURL(item.id, "tv")}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="card">
                  <h3>{item.name}</h3>
                  <p>Rating:{item.vote_average}</p>
                  <img
                    src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                    className="poster"
                  ></img>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
      <style jsx global>
        {globalStyles}
      </style>
      <style jsx topmovies>
        {topmoviesStyles}
      </style>
    </div>
  );
};

export default function Category({ props }) {
  //get Data from URL
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>router.query.search</title>
      </Head>
      <main>
        <h1 className="title">Person Page</h1>
        <Grid personId={router.query.search}></Grid>
      </main>

      <footer>
        <Link href="/">
          <button>← Home</button>
        </Link>
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
