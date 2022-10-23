import axios from "axios";
import { useState } from "react"
import calcPagesTotal from "../functions/calcPagesTotal";

const usePost = ()=> {
const [data, setData] = useState();
const [category, setCategory] = useState()
const fetchData = async (id)=> {
    const datas = await axios.get(`http://127.0.0.1:8000/getPost/` + id);
    setData(datas.data.data);
    setCategory(datas.data.category) 
}
return [data , category, fetchData];
}
export default usePost;