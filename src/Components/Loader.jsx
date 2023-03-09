import { CircularProgress, Box,Stack } from "@mui/material"

const Loader = ()=>{
    return <Box mt={2}>
        <Stack alignItems='center'>
          <CircularProgress />
        </Stack>
    </Box>
}
export default Loader;