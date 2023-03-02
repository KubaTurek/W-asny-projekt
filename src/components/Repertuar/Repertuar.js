import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import css from './Repertuar.module.css';
import { weddingSongs, occasionSongs } from 'data/songsLists';

export const Repertuar = () => {
  const [songs, setSongs] = useState();

  const selectSongs = selectedSongs => {
    setSongs(selectedSongs);
  };

  useEffect(() => {
    selectSongs(weddingSongs);
  }, []);

  return (
    <div className={css.repertuar}>
      
        <h2 className={css.repertuar__title}>Przykładowa lista utworów</h2>
      
      <div className={css.repertuar__lists}>
        <div className={css.repertuar__buttons}>
          <button
            type="button"
            className={css.repertuar__button}
            onClick={() => selectSongs(weddingSongs)}
          >
            Na ślub
          </button>

          <button
            type="button"
            className={css.repertuar__button}
            onClick={() => selectSongs(occasionSongs)}
          >
            Na przyjęcia okolicznościowe
          </button>
        </div>
        <ul className={css.repertuar__items}>
          {songs !== undefined &&
            songs.sort((a, b) => a.localeCompare(b)).map(song => (
              <li key={nanoid()} className={css.repertuar__song}>
                {song}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};
