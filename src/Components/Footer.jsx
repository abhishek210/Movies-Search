import {Box,Typography} from '@mui/material'
const Footer = ()=>{
    return(
        <>
        <Box p={4}>
            <Typography variant='h5' align="center">Developed by Abhishek yadav</Typography>
            <Typography variant='h5' align="center">
                <a href='https://github.com' target='_blank' rel='noreferrer'>
                  Github link  
                </a>
            </Typography>
        </Box>
        </>
    )
}
export default Footer