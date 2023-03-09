import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Apim } from "../../Utility";
import { useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/system";
import { Chip, Typography,IconButton } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import { Avatar } from "@mui/material";
import useLocalStorage from 'use-local-storage';
import axios from 'axios'
const Details = () => {
  const { user } = useParams()
  const [detail, setDetail] = useState({})
  const navi = useNavigate()
  const [flag, setflag] = useState([])
  const [Favorite,setfavorite] = useLocalStorage("Favorite","[]")
  const [isfavorite,setFav] = useState(false)
  useEffect(()=>{
    const favs = JSON.parse(Favorite)
    if(favs.includes(user)){
      setFav(true)
    }
    else{
      setFav(false)
    }
  },[Favorite,user])
  const tooglebutton = ()=>{
    const favs = JSON.parse(Favorite)
    if(isfavorite){
      const idx = favs.indexOf(user)
      favs.splice(idx,1)
      setFav(false)
    }
    else{
      favs.push(user)
      setFav(true)
    }
    setfavorite(JSON.stringify(favs))
  }
  useEffect(() => {
    (async () => {
      const res = await Apim.get(`?i=${user}&plot=full`)
      if (res.data.Response === "False") {
        // console.log("invalid")
        navi("/notfound")
      }
      else {
        // console.log("valid")
        setDetail(res.data)

      }
    })()
  }, [user])
  useEffect(() => {
    (async () => {
      if (detail.Country?.length > 0) {
        const response = await axios.get(`https://restcountries.com/v3.1/name/${detail.Country}?fullText=true`)
        setflag(response.data)
      }
      // response.data.map((ele)=>{
      //   console.log(ele.flags.png)
      // })
    })()
  }, [detail])
  return (
    <>
      {/* {console.log(detail.Actors)} */}
      <Box p={5}>
        <Stack spacing={3}>
          <Stack direction="row" spacing={5}>
            <img src={detail.Poster} alt="not" />
            <Box>
              <Typography variant="h3">
                {detail.Title}
                <IconButton color="error" onClick={tooglebutton}>
                  {isfavorite?<FavoriteIcon />:<FavoriteBorderIcon />}
                </IconButton>
              </Typography>
              <Typography variant="h4">
                Released on {detail.Released}
              </Typography>
              <Stack direction="row" gap={2} mt={3} sx={{ flexWrap: "wrap" }} justify-content="flex-start" align-items="flex-start">
                {detail.Actors?.split(", ").map((ele, idx) => {
                  return <Chip key={idx} label={ele} />
                })}
                {detail.Writer?.split(", ").map((ele, idx) => {
                  return <Chip key={idx} label={ele} />
                })}
                {detail.Director?.split(", ").map((ele, idx) => {
                  return <Chip key={idx} label={ele} />
                })}
              </Stack>
              <Stack direction="row" spacing={2} mt={1} alignItems="center">
                {flag.map((ele) => {
                  console.log(ele.flags)
                  return <>
                    <img src={ele.flags.svg} atl="img" height={40} alt="error" />
                    <Typography>{detail.Country}</Typography>
                    </>
              })}
              </Stack>


            </Box>
          </Stack>
          <Typography >
            Plots:
          </Typography>
          <Typography align="justify">
            {detail.Plot}
          </Typography>

        </Stack>


      </Box>
    </>
  )
}
export default Details;