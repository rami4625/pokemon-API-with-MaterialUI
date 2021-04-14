import React, { useState } from 'react'
import mockData from './mockData'
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
  });

const Pokemon = (props) => {
    const classes = useStyles()
    const { match } = props
    const { params } = match
    const { pokemonId } = params
    const [pokemon, setPokemon] = useState(mockData[`${pokemonId}`])
    console.log(pokemon)

    return (
        <>
        <MyAppBar />
        <Container maxWidth="lg">
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
        </Container>
        </>
    )
}

export default Pokemon
