import Head from "next/head";
import { useEffect, useState, forwardRef } from "react";
import Link from "next/link";
import globalStyles from "../dist/global.js";
import topmoviesStyles from "../dist/topmovies.js";

const MyButton = forwardRef(({ onClick, href, disabled }, ref) => {
  return (
    <button
      className="button1"
      href={href}
      onClick={onClick}
      ref={ref}
      disabled={disabled}
    >
      Search
    </button>
  );
});

const stringToMovieInfo = (movieId) => {
  ///results?search=
  return `movieinfo?search=${movieId}`;
};

const stringToSearch = (movieName) => {
  return `${movieName.replaceAll(" ", "-")}`;
};

const Title = () => <h1 className="title">Movies App</h1>;

const Grid = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=c33f0232a6bc04e36368ea053300df40&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((json) => {
        setData(() => json);
      });
  }, []);
  if (data === null) return <h2>Fetching data</h2>;

  return (
    <div className="App">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css"></link>
      <div className="grid">
        {data.results.slice(0, 5).map((item, key) => {
          return (
            <Link
              key={item.id}
              href={stringToMovieInfo(item.id)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <a className="card">
                <h3>{item.title}</h3>
                <img
                  src={`https://image.tmdb.org/t/p/w154${item.poster_path}`}
                  className="poster"
                ></img>
                <p className="rating">Rating:{item.vote_average}</p>
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
export default function Home() {
  const [category, setCategory] = useState("");
  const { items, setItems } = useState(null); //UseState

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className="container">
      <Head>
        <title>Movies App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title />

        <h3>Trending Movies</h3>
        <span className="icon-text">
  <span className="icon">
    <i className="fas fa-home"></i>
  </span>
  <span>Home</span>
</span>
        <Grid />

        <h3 className="description">Find a Movie:</h3>

        <div className="grid">
          <input
            className="inputmovie"
            type="text"
            id="category"
            name="category"
            onChange={handleChange}
            value={category}
          ></input>
          <br />
          <Link
            className="button1"
            href={{
              pathname: "/results",
              query: { search: `${stringToSearch(category)}` },
            }}
            passHref
          >
            <MyButton className="button1" disabled={category === ""} />
          </Link>
          <br />
        </div>

        <div>
          <p>Searching for: {category}</p>
        </div>
      </main>

      <style jsx global>
        {globalStyles}
      </style>
      <style jsx topmovies>
        {topmoviesStyles}
      </style>
    </div>
  );
}
