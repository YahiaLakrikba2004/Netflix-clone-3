import React, { useEffect, useState } from 'react';

const TVShows = () => {
  // Definisci lo stato per memorizzare i dati delle serie TV
  const [tvShows, setTVShows] = useState([]);

  // Funzione per ottenere i dati delle serie TV
  const getTVShows = async () => {
    try {
      // Effettua la chiamata API per ottenere i dati delle serie TV
      const response = await fetch('http://www.omdbapi.com/?i=tt3896198&apikey=f032232b');
      const data = await response.json();
      // Imposta i dati delle serie TV nello stato
      setTVShows(data.results);
    } catch (error) {
      console.error('Error fetching TV shows:', error);
    }
  };

  // Effettua la chiamata API quando il componente viene montato
  useEffect(() => {
    getTVShows();
  }, []);

  return (
    <div>
      <h1>TV Shows</h1>
      <div className="tv-shows-container">
        {/* Mappa attraverso le serie TV e visualizzale */}
      {tvShows && tvShows.map(tvShow => (
  <div key={tvShow.id} className="tv-show">
    <h2>{tvShow.name}</h2>
    <p>{tvShow.overview}</p>
  </div>
))}

      </div>
    </div>
  );
}

export default TVShows;
