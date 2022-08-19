import Head from "next/head";
import Link from "next/link";
import globalStyles from "../../dist/global.js";
import topmoviesStyles from "../../dist/topmovies.js";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const stringToURL = (movieId, media_type) => {
  ///results?search=
  return `${media_type}info?search=${movieId}`;
};

const stringReplace = (movieName) => {
  return `${movieName}`.replaceAll("-", " ");
};

const Title = ({title}) => <h1 className="title">{title}</h1>;
const Title2 = ({title}) => <h2 className="title">{title}</h2>;

const Grid = ({ movieName, numberMovies = "5", media_type = "movie" }) => {
  //searchType
  const [data, setData] = useState(null);

  if (numberMovies < 5) numberMovies = 5;

  useEffect(() => {
    if (movieName) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=c33f0232a6bc04e36368ea053300df40&language=en-US&query=${movieName}`
      )
        .then((response) => response.json())
        .then((json) => {
          setData(() => json);
        });
    }
  }, [movieName]);
  if (!data || !movieName) return <h2>Fetching data</h2>;


  var data2 = data.results
  .filter((element) => element.media_type == media_type)
  .slice(0, numberMovies);

  console.log("first",media_type,data2)

  if (data2.length == 0) return <div><p>No Data Available</p></div>;

  return (
    <div className="App">
      <div className="grid">
        {data2.map((item, key) => {
            console.log("second",media_type,data);
            return (
              <Link
                key={item.id}
                href={stringToURL(item.id, item.media_type)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <a className="card">
                  {media_type == "movie" ? (
                    <h3>{item.title}</h3>
                  ) : (
                    <h3>{item.name}</h3>
                  )}
                  {media_type == "person" ? (
                    <img
                      src={`https://image.tmdb.org/t/p/w154${item.profile_path}`}
                      className="poster"
                    ></img>
                  ) : (
                    <img
                      src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                      className="poster"
                    ></img>
                  )}
                  {media_type != "person" && (
                    <p className="rating">Rating:{item.vote_average}</p>
                  )}
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
  );
};

export default function Category({ props }) {
  //get Data from URL
  const router = useRouter();

  return (
    <div className="container">
      <Head>
        <title>Results {router.query.search}</title>
      </Head>
      <main>
        <h1 className="title">Search results : {stringReplace(router.query.search)}</h1>
        <Title title="Movies :"/>
        <Grid movieName={router.query.search} media_type="movie"></Grid>
        <Title title="TV Shows:"/>
        <Grid movieName={router.query.search} media_type="tv"></Grid>
        <Title title="People:"/>
        <Grid movieName={router.query.search} media_type="person"></Grid>
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
