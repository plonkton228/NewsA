import { Link } from 'react-router-dom';
import styles from './postsv2.module.css'
import { useNavigate } from 'react-router-dom';
import React from 'react';
const Postv2 = ({props, sect})=> {
   const colorM = ['M',props.id_color].join(" ")
   let navigate = useNavigate();  
    return(
        <>
          <div   onClick={() => navigate(`${sect}/${props.id}`)}   className= {[`${styles.maincblock}`].join(" ")}>
            <img  className= {["img-fluid"].join(" ")} src ={[`http://127.0.0.1:5173/storage/app/${props.img}`].join(" ")}></img>
            <p className= {styles.customP}>{props.body}</p>
        </div>
         
        </>
    )
}
export default Postv2;