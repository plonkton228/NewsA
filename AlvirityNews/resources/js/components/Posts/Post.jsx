import { useNavigate } from 'react-router-dom';
import styles from './posts.module.css';
const Post = ({props})=> {
   const colorM = ['M',props.id_color].join(" ")
   const navigate = useNavigate();
    return(
        <>
          <div className= {[`${styles.MainBlock} ${styles['M'+props.id_color]}`].join(" ")}>
          <img className= {["img-fluid", styles.imgC].join(" ")}  src ={[`http://127.0.0.1:5173/storage/app/${props.img}`].join(" ")}></img>
                <p className={styles.pl}>{props.body}</p>
                <hr></hr>
                <span className={styles.spanl} onClick = {()=> navigate(`/actual/${props.id}`)}>Читать</span>
            <div className= {[`${styles.ChildBlock} ${styles['C'+props.id_color]}`].join(" ")}>
            </div>
          </div>
        </>
    )
}
export default Post;