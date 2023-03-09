import { Typography,Stack } from "@mui/material"
import { Link } from "react-router-dom"
const NotFound = ()=>{
    return(
        <>
        <Stack mt={20} >
            <Typography variant="h5" align='center' color="red">
                There is no such type of movie 
                
            </Typography>
            <Link to="/" align='center' >Go to Home page</Link>
        </Stack>
        </>
    )
}
export default NotFound