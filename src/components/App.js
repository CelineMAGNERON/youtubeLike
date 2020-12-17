import React, { useState, useEffect } from "react";
import { SearchBar } from "./SearchBar";
import { useVideos } from "../hooks/useVideos";
import { VideoDetail } from "./VideoDetail/VideoDetail";
import { VideoList } from "./VideoList/VideoList";

export const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos, search] = useVideos("buildings");

  /** prend en param un fonction callback, le traitement de ce use, et liste de dépendances en tableau, optionnel mais sinon réagit en boucle infinie
   * ! useEffect(() => {}) ===> sans dépendance ======> s'activer à chaque rerender du composant (attention, risque de rerendu infini)
   * ? useEffect(() => {}, []) ===> tableau vide en dépendance <=> componentDidMount() => executer une seule fois, apres le premier rendu composant
   * * useEffect(() => {}, [maProps]) ===> tableau avec une dépendance <=> componentDidUpdate() => s'executer à chaque fois que maProps a été mis à jour.
   * ? useEffect(() => {  return }, []) ===> effect avec un return <=> componentWillUnmount() => s'executer à la suppression de l'instance du composant
   */
  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="container">
      <div className="mt-3 is-flex is-justify-content-center is-align-items-center">
        <SearchBar onSubmit={search} />
      </div>
      <div className="mt-6 is-flex is-flex-direction-row is-justify-content-center is-align-items-center">
        <div className="columns">
          <div className="column is-three-fifths ">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="column is-one-third is-offset-1">
            <VideoList onVideoSelect={onVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};
