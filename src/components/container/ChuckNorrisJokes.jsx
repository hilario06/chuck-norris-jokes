import React, { useState } from 'react';
import { RandomChuckNorris } from '../pure/RandomChuckNorrisJoke';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

const ChuckNorrisJokes = () => {
  const [jokes, setJokes] = useState([]);
  const [positiveVote, setPositiveVote] = useState(0);
  const [negativeVote, setNegativeVote] = useState(0);

  function addJoke(joke) {
    setJokes([...jokes, joke]);
  }

  function vote(id, isPositive){
    let listJokes = jokes.map((element) => {
                  if(element.id === id){
                    if(!element.hasOwnProperty('isLike')){
                      if(isPositive){
                        setPositiveVote(positiveVote + 1);
                      }else{
                        setNegativeVote(negativeVote + 1);
                      }
                    }else{
                      console.log('dfgdgdf')
                      if(isPositive){
                        setPositiveVote(positiveVote + 1);
                        setNegativeVote(negativeVote - 1);
                      }else{
                        setPositiveVote(positiveVote - 1);
                        setNegativeVote(negativeVote + 1);
                      }  
                    }
                    element['isLike'] = isPositive
                  }
                  return element;
                });
    setJokes(listJokes);
  }

  return (
    <div style={{marginTop: '30px'}}>
      <RandomChuckNorris add={addJoke}/>
      <p>Number of likes : {positiveVote}</p>
      <p>number of dislikes: {negativeVote}</p>
      <Box sx={{ width: '100%' }}>
        {
          jokes.length > 0 ?
          (<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            {
              jokes.map((chuckNorris) => {
                return  <Grid key={chuckNorris.id} xs={6}>

                          <Card>
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                Lizard
                              </Typography>
                              <Typography variant="body2" color="text.secondary">{chuckNorris.value}</Typography>
                            </CardContent>
                            <CardActions>
                              <IconButton
                                  onClick={() => vote(chuckNorris.id, true)}
                                  style={chuckNorris.isLike ? {color: '#0094ff'} : {color: '#aeccff'}}
                                  aria-label="add to shopping cart"
                                  disabled={chuckNorris.isLike && 'true'}
                                >
                                <ThumbUpIcon />
                              </IconButton>
                              <IconButton
                                  onClick={() => vote(chuckNorris.id, false)}
                                  style={chuckNorris.isLike === false ? {color: '#0094ff'} : {color: '#aeccff'}}
                                  aria-label="add to shopping cart"
                                  disabled={chuckNorris.isLike === false && 'true'}
                                >
                                <ThumbDownIcon />
                              </IconButton>
                            </CardActions>
                          </Card>
                        </Grid>
              })
            }
          </Grid>)
          :
          (
            <p>Add Chuck</p>
          )
        }
      </Box>
    </div>
  )
}

export default ChuckNorrisJokes;
