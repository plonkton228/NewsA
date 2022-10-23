import React, { useEffect, useState } from 'react';
import classes from "./App.module.css";
import useFetch from './hooks/useFetch';
import Posts from './Posts/Posts';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Some from './sections/Some';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
 const App = () => {
    const [data, getData] = useFetch();
    useEffect( ()=> {
          getData();  
    },[])
   
    return (
        <>
          <section className= {classes.sectionC}>
            <div className={['container', classes.containerC].join(' ')}>
                <h1>Актуальные новости</h1>
                  {
                    data ? <Posts data={data.data}/>   : <h1>Загрузка!</h1>
                  }
            </div> 
           </section>
                <Some/>
        </>
        
    )
}

export default App;


