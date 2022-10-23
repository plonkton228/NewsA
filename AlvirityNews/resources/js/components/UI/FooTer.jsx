import style from '../styles/styles.module.css';
import googleMapReact from 'google-map-react';
const FooTer = ()=> {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
    return (
      <>
      <footer>
        <h1>Контакты</h1>
          <div className='container'>
               <div className= {style.flexcontainer}>
                     <div className= {style.cart}>
     <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Acf54b14e2637386776b4e3f25e477fd7deb5b76a21f656cf404360c1878965fd&amp;source=constructor" width="700" height="502" frameborder="0"></iframe>
                     </div>
                     <div>
                        <h3>Резидент Технопарка Жигулёвская долина</h3>
                        <div>
                            <p>Телефон</p>
                            <p>+7 (927) 788 - 88 - 82</p>
                            <p>Email:</p>
                            <p>info@alvirity.com</p>
                            <p>Адрес:</p>
                            <p>г. Тольятти, ул. Южное шоссе, д. 163А к2/4</p>
                        </div>
                     </div>
               </div>
          </div>
          \\
      </footer>
      </>
      
    )
}
export default FooTer;