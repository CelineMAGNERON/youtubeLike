import { useEffect, useState } from "react";
import youtube from "../apis/youtube";
 
// Hook custom, concaténation de hooks React, qui permet les recherches sur youtube, avec param defaultSearchTerm
// Avoir liste de vidéos et useEffect :
// avec param de la fonction en dépendances pour lancer les recherches sur les bulidings, la defaultSearch)
// A la fin du hook on renvoie un tab avec liste de vidéo et ma méthode serach qui interroge l'API YouTube

const KEY = "AIzaSyBh3lryqABCw8gsDsjb0T2gvNboE0MO1Wo";

export const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
      },
    });

    setVideos(response.data.items);
  };

  return [videos, search];
};
