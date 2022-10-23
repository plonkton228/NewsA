import { useEffect, useState } from "react";
import calcPagesTotal from "../functions/calcPagesTotal";

const usePages = () => {
   const [totalPages, setTotalPages] = useState();
   let s;
   function setPages(totalCount)
   {
      setTotalPages (calcPagesTotal(totalCount));
      s = calcPagesTotal(totalCount)
   }
   console.log(totalPages);
  
   return [s, setPages];
}
export default usePages;