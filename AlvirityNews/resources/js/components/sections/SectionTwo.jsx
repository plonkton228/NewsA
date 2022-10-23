import { forIn } from 'lodash';
import { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import Postsv2 from '../Posts/Postsv2';
import style from './section.module.css';

const SectionTwo = ({props})=> {
    const [data, getData] = useFetch();
    useEffect( ()=> {
          getData(); 
    },[])
    
    return (
        <section className= {style.sectionC}>
        <div className= {style.containerC}>
           <div className={style.containerB} style = {{justifyContent: props.style.JusifyContent}}>
            <div className= {style.header} style = {{borderRadius: `${props.style.borderRadius}px`}} >
                <h1>{props.titles}</h1>
            </div>
           </div>
                {
                 data ? <Postsv2 sect={props.title} props= {props.id} data={data.data} /> : <h1>Загрузка!</h1>
                }
        </div>
        </section>
    )
}
export default SectionTwo