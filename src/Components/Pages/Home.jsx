import useLocalStorage from 'use-local-storage';
import FavMovieCard from '../FavMovieCard';
import { Box,Grid,Typography } from '@mui/material'

const Home  = ()=>{
  const [Favorite,setfavorite] = useLocalStorage("Favorite","[]")
    return(
        <>
        <Box p={4}>
            <Typography variant='h5' textAlign='center'>My Movies Collection</Typography>
            <hr></hr>
        <Grid container spacing={3}>
        {JSON.parse(Favorite).map((ele,i)=>{
            return <FavMovieCard user = {ele} key={i} />
        })}
        </Grid>
        </Box>
       
        </>
    )
}
export default Home