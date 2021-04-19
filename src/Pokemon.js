import React, { useState, useEffect } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import MyAppBar from './MyAppBar'
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import ArrowBack from '@material-ui/icons/ArrowBack'
import axios from 'axios';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign: 'center',
    },

    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },

    title: {
      fontSize: 14,
    },

    pos: {
      marginBottom: 12,
    },

    media: {
      height: 100,
      width: 100,
      marginRight: 'auto',
      marginLeft: 'auto',
    },

    mTop: {
      marginTop: '20px',
      marginLeft: '20px',
    }
  });

const Pokemon = (props) => {
    const classes = useStyles()
    const { history, match } = props
    const { params } = match
    const { pokemonId } = params
    const [pokemon, setPokemon] = useState()

    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
        .then(function (response) {
          const { data } = response
          setPokemon(data)
        })
        .catch(function (error) {
          setPokemon(false)
        })
    }, [pokemonId])

    const pokeItem = (pokemon) => {
      return (
          <Grid container justify='center'>
            <Grid item xs={12} sm={6} lg={6}>
                <Box mt={2}>
                    <Card className={classes.root}>
                        <CardActionArea style={{paddingBottom: '50px'}}>
                            <CardContent>
                                <CardMedia
                                className={classes.media}
                                image={pokemon.sprites.front_default}
                                title="Contemplative Reptile"
                                />
                                <Typography style={{textTransform: 'capitalize'}} variant="h5" component="h2">
                                {pokemon.id}. {pokemon.name}
                                </Typography>
                                <Typography style={{overflowWrap: 'anywhere'}} variant="body2" component="p">
                                height: {pokemon.height}
                                </Typography>
                                <Typography style={{overflowWrap: 'anywhere'}} variant="body2" component="p">
                                weight: {pokemon.weight}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Grid>
          </Grid>
      )
    }

    return (
        <>
          <MyAppBar />

          <Container maxWidth="lg">
            {pokemon !== undefined &&
              <Button startIcon={<ArrowBack />} variant='contained' color='primary' className={classes.mTop}
              onClick={() => history.push('/')}>
                Back to Home
              </Button>
            }
            
            {pokemon === undefined && <CircularProgress className={classes.mTop} />}
            {pokemon && pokeItem(pokemon)}
            {pokemon === false && <Typography className={classes.mTop} variant="h4">ID Not Found</Typography>}
          </Container>
        </>
    )
}

export default Pokemon
