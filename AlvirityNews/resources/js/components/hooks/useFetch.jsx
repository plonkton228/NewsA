import axios from "axios";
import { useState } from "react"

const useFetch = ()=> {
  const [data,setData] = useState();

  const  FetchData =  async ()=>
  {
    const data = await axios.get(`http://127.0.0.1:8000/getPost/`);
    setData(data);
  }
  return [data, FetchData];
}
export default useFetch;