import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import calcPagesTotal from '../functions/calcPagesTotal';
import usePagination from '../hooks/usePagination';
import styles from './sheet.module.css';
const Kybersport = () => {
   let [data, getData] = usePagination();
   let totalPages;
   let page = [];
   let navigate = useNavigate();
   let [currentPage, setCurrentPage] = useState(1);
      useEffect(()=> {
         getData(currentPage);
      },[currentPage])
    useMemo(()=> {
      if(data)
      {
        
        totalPages = calcPagesTotal(data.total); 
      
       for(let i =1 ; i <= totalPages; i++)
      {
         page.push(i ); 
      }
      }
    },[data])
    
      return(
         <div className='container' style={{margin: '50px auto'}}>
            <p className= {styles.customN} onClick={()=> navigate(`/`)}>Назад</p>
            <h1>Киберспорт</h1>
            <div className= {['container', styles.flexcontainer].join(' ')}>
          
               {
                  data ?  data.data.map((e)=> 
                  
                
                  <div onClick={()=> navigate(`${e.id}`)} className= {[`${styles.maincblock}`].join(" ")}>
                  <img   className= {["img-fluid"].join(" ")}  src ={[`http://127.0.0.1:5173/storage/app/${e.img}`].join(" ")}></img>
                  <p className={styles.customP}>{e.body}</p></div>) : <h1>Загрузка!</h1>
               }
             
            </div>
            <div className= {styles.containeralign}>{page.map((e)=><button className= {e == currentPage? `${styles.current_button} ${styles.Mbutton}` : `${styles.Mbutton}`} value={e} onClick={(e)=>{ setCurrentPage(e.target.value)}}>{e}</button>)}</div>
         </div>
          
         )
}
export default Kybersport;