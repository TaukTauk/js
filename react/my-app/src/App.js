import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";
// 5c4b35

const API_URL = 'http://www.omdbapi.com?apikey=5c4b35';


const App = () => {
	const [searchTerm, setSearchTerm] = useState("");
	const [movies, setMovies] = useState([]);
  
	useEffect(() => {
	  searchMovies("Batman");
	}, []);
  
	const searchMovies = async (title) => {
	  const response = await fetch(`${API_URL}&s=${title}`);
	  const data = await response.json();
  
	  setMovies(data.Search);
	};
	
	const enterKey = (event) => {
		if (event.key === "Enter") {
			searchMovies(searchTerm);
		}
	}
	return (
	  <div className="app">
		<h1>MovieLand</h1>
  
		<div className="search">
		  <input
			value={searchTerm}
			onChange={(e) => setSearchTerm(e.target.value)}
			placeholder="Search for movies"
			onKeyDown={() => searchMovies(searchTerm)}
		  />
		  <img
			src={SearchIcon}
			alt="search"
			onClick={(event) => enterKey(event)}
		  />
		</div>
  
		{movies?.length > 0 ? (
		  <div className="container">
			{movies.map((movie) => (
			  <MovieCard movie={movie} />
			))}
		  </div>
		) : (
		  <div className="empty">
			<h2>No movies found</h2>
		  </div>
		)}
	  </div>
	);
  };
  
  export default App;