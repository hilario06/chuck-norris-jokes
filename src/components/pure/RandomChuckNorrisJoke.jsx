import React from 'react';
import Button from '@mui/material/Button';
import { getRandomChuckNorrisJoke } from '../../services/randomChuckNorrisJokeService';

export const RandomChuckNorris = ({add}) => {

  const obtainJoke = () =>{
    getRandomChuckNorrisJoke()
      .then((response) => {
        if (response.status === 200) {
          add(response.data);
        }
      })
      .catch((error) => {
        alert(`Somethin went wrong: ${error}`);
      });
  }

  return (
    <div>
      <Button onClick={obtainJoke} variant="contained">Generate Joke</Button>
    </div>
  )
}
