import { Apim } from "../../Utility"
import { useEffect, useState } from "react"
import { useSearchParams } from 'react-router-dom'
import SearchCard from "../SearchCard"
import { Stack } from "@mui/system"
import {Typography} from "@mui/material"
import InfiniteScroll from 'react-infinite-scroller'
import Loader from "../Loader"
import { useNavigate } from "react-router-dom"
const Search = () => {
    const [list, setlist] = useState([])
    const [param] = useSearchParams("iron man")
    const [result, setResults] = useState(0)
    const navi = useNavigate();
    useEffect(() => {
        if (param.has("q") && param.get("q") !== "") {
            setlist([]);
        }

    }, [param])
    const loadData = (pageNo)=>{
        pageNo = pageNo+1;
        (async () => {
            const response = await Apim.get(`?s=${param.get("q")}&page=${pageNo}`)
            if(response?.data?.Response ==="False"){
                navi('/404')
            }
            setResults(response.data.totalResults);
            setlist((originalData)=>{
                return [...originalData, ...response.data.Search];
            });
        })()
    }
    return (
        <>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadData}
                hasMore={true || false}
                loader={<Loader />}
            >
            <Stack spacing={3} mt={1}>
                <Typography>{result} results found</Typography>
                {list.map((ele, idx) => {
                    return <SearchCard data={ele} />
                })}
            </Stack>
            </InfiniteScroll>

        </>
    )
}
export default Search