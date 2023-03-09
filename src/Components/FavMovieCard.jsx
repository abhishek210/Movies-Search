import { useEffect } from "react";
import { Apim } from "../Utility";
import { useState } from "react";
import {Grid,Card, CardMedia, CardContent, CardActionArea, Typography} from '@mui/material'
import { useNavigate } from "react-router-dom";
const FavMovieCard = ({user})=>{
    const [data,setData] = useState([])
    const navi = useNavigate();
    useEffect(()=>{
        (async()=>{
           const res = await Apim.get(`?i=${user}`)
           setData(res.data)
        })()
        
    },[user])

    const clicked = ()=>{
        navi(`/details/${user}`);
    }

    return <>
             <Grid item xs={3}>
             <Card>
                <CardActionArea onClick={clicked}>
                <CardMedia image={data.Poster} component = "img" height="400" />
                <Typography variant="h5">
                <CardContent>{data.Title}</CardContent>
                </Typography>
                </CardActionArea>
                
             </Card>
             </Grid>
    </>
}
export default FavMovieCard;