import axios from "axios";
import { useState } from "react"
import calcPagesTotal from "../functions/calcPagesTotal";

const usePagination = ()=> {
const [data, setData] = useState();
const fetchData = async (page = 2)=> {
    const datas = await axios.get(`http://127.0.0.1:8000/getPostP?page=${page}`);
    setData(datas.data); 
}
return [data,fetchData];
}
export default usePagination;