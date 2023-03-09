import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {Chip} from '@mui/material';
import { Link } from 'react-router-dom';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
const SearchCard = ({data})=>{
    // const theme = useTheme();

    return (
      <Card sx={{ display: 'flex' }}>
         <CardMedia
          component="img"
          sx={{ width: 126 }}
          image={data.Poster !=="N/A" ? data.Poster : "https://www.shutterstock.com/image-vector/no-image-available-vector-illustration-260nw-744886198.jpg"}
          alt="Live from space album cover"
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Link to={`/details/${data.imdbID}`}>
            <Typography component="div" variant="h5">
              {data.Title}
            </Typography>
            </Link>
            <Typography variant="subtitle1" color="text.secondary" component="div">
              {data.Year}
            </Typography>
            <Chip label={data.Type} />
          </CardContent>
          {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box> */}
        </Box>
       
      </Card>
    );
}
export default SearchCard ;



