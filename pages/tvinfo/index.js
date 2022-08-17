import Head from "next/head";
import Link from "next/link";
import globalStyles from "../../dist/global.js";
import topmoviesStyles from "../../dist/topmovies.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

//SHOW MOVIE DETAILS
//SIMILAR TO RESULTS TO GET INFO BUT JUST SHOW A MOVIE

const stringToURL = (tvId, media_type) => {
  ///results?search=
  return `${media_type}info?search=${tvId}`;
};

const Grid = ({ tvId }) => {
  const [data, setData] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    if(tvId){
    fetch(
      `https://api.themoviedb.org/3/tv/${tvId}?api_key=c33f0232a6bc04e36368ea053300df40`
    )
      .then((response1) => response1.json())
      .then((json1) => {
        setData(() => json1);
      });

    fetch(
      `https://api.themoviedb.org/3/tv/${tvId}/credits?api_key=c33f0232a6bc04e36368ea053300df40&language=en-US`
    )
      .then((response2) => response2.json())
      .then((json2) => {
        setCredits(() => json2);
      });}
  }, [tvId]);

  if (!data || !credits || !tvId) return <h2>Error</h2>;

  return (
    <div className="App">
      <div className="container">
        <h1>{data.name}</h1>
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
        <h3 className="text-3xl font-bold underline">Cast:</h3>
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
        </div>

        <style jsx global>
          {globalStyles}
        </style>
        <style jsx topmovies>
          {topmoviesStyles}
        </style>
      </div>
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
        <h1>TV Show Info</h1>
        <Grid tvId={router.query.search}></Grid>
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
