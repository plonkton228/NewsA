import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import usePost from "../hooks/usePost";
import style from './posts.module.css';
const  Postid = ()=> {
let para = useParams();
let navigate = useNavigate();
   let [post, category, GetPost] = usePost();
   useEffect(()=> {
    GetPost(para.id);
   },[])
   if(category)
   {
    category = category.filter((e)=>  post.id_category === e.id);
   }
    return(
        <>
        
        {
            post ? <div className="container">
             <div className= {style.flexcontainer}>
             <p className= {style.customN} onClick={()=> navigate(`/${category[0].name}`)}>Назад</p>
            <img className= {style.imgC} src ={[`http://127.0.0.1:5173/storage/app/${post.img}`].join(" ")}></img>
            <div className= {style.childflex}>{post.body}</div>
         </div>
            </div>
           : <h1>Загрузка</h1>
        }
         
        </>
    )
}
export default Postid;