import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom';
import { contextProvider }  from './PageContextProvider'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles({
    root: {
      minWidth: 275,
      textAlign: 'center'
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

    btn: {
      marginRight: 'auto',
      marginLeft: 'auto',
      marginBottom: '20px',
      marginTop: '20px',
      textTransform: 'capitalize',
    }
  });

const Items = ({ data }) => {
    const classes = useStyles();
    const history = useHistory()
    const [searchData, setSearchData] = useContext(contextProvider)
    
    const pokeCard = (item) => {
      const pokeId = item[1].id
      const imgLink = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokeId}.png`

      return (
        <Box mt={2} onClick={() => history.push(`/${pokeId}`)}>
          <Card className={classes.root}>
              <CardActionArea>
                <CardContent>
                    <CardMedia
                      className={classes.media}
                      image={imgLink}
                      title="Contemplative Reptile"
                    />
                    <Typography style={{textTransform: 'capitalize'}} variant="h5" component="h2">
                    {item[1].name}
                    </Typography>
                    <Typography style={{overflowWrap: 'anywhere'}} variant="body2" component="p">
                    {item[1].sprite}
                    </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                  <Button variant='contained' color='primary' size="small" className={classes.btn}>{item[1].name} Page</Button>
              </CardActions>
          </Card>
        </Box>
      )
    }

    return (
        <Container maxWidth="lg">
            <Grid container spacing={2}>
              {Object.entries(data).map(item =>
              item[1].name.includes(searchData) &&
                <Grid key={item[1].id} item xs={12} sm={6} lg={3}>
                    {pokeCard(item)}
                </Grid>
              )}
            </Grid>
        </Container>
    )
}

export default Items
