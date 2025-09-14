import React from "react";
import Header from "../components/Header";
import MovieCard from "../components/MainContent";

export default function Home() {
  const movies = [
    {
      title: "Inception",
      description: "A thief who enters the dreams of others must plant an idea in someone's mind.",
      image: "https://m.media-amazon.com/images/I/912AErFSBHL._AC_SY445_SX342_QL70_ML2_.jpg",
    },
    {
      title: "Interstellar",
      description: "Explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      image: "https://m.media-amazon.com/images/I/712I5GOGprL._AC_SY445_SX342_QL70_ML2_.jpg",
    },
    {
      title: "The Dark Knight",
      description: "Batman faces the Joker, a criminal mastermind who wants to see Gotham in chaos.",
      image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_QL75_UX380_CR0,0,380,562_.jpg",
    },
  ];

  return (
    <main className="max-w-5xl mx-auto mt-10 space-y-8">
      <Header />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            description={movie.description}
            image={movie.image}
          />
        ))}
      </section>
    </main>
  );
}
