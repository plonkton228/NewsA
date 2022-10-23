import image1 from '../UI/img/image 1.png';
import styles from './section.module.css';
import image2 from '../UI/img/TPP 1.png';
import image3 from '../UI/img/tppz 1.png' ;
import image4 from '../UI/img/logo-light 1.png';
import image5 from '../UI/img/logo-2 1.png';
const Inso = ()=> {
    return (
        <>
        <section>
            <div style = {{color: 'white', display: 'flex', flexDirection:'column'}}>
                <h1 style={{alignSelf: 'center'}}>Партнеры</h1>
                <div className= {styles.InsoContainer}>
                    <div className={['container' , styles.InsoContainer1].join(" ")} >
                     <img src = {image1}></img>
                     <img src = {image2}></img>
                     <img src = {image3}></img>
                     <img src = {image4}></img>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}
export default Inso;