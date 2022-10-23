import style from '../styles/styles.module.css';
import imageAlvirity from './img/AlvirityNews.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../styles/styles.module.css'
const NavBar = ()=> {
  let [clas, getClas] = useState('open');
    return (
      <header className= {style.head}>
        <div onClick={()=> clas == 'open' ? getClas('close') : getClas('open')} className= {style.burger}><span  className= {[style.menu_burger, style[clas]].join(' ')}></span></div> 
   <nav className={['navbar', 'navbar-expand-lg', 'navbar-light', 'bg-light', style.navbarcolor].join(" ")}>
        <div className= {['container-fluid', style.containerfluidedit].join(" ")}>
                 <div className= {style.imgC}>
                    <img src = {imageAlvirity} className="img-fluid" ></img>
                  </div>
          <div className= {['collapse', 'navbar-collapse', style.navBarEdit].join(" ") }  id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}   to = "/">Главная</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}   to = "/games">Игровые</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}  to = '/technology'>Технологии</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}  to = "/gadjest">Гаджеты</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")} to = "/kybersport">Киберспорт</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")} to = "/alvirity" >АльВиРити</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
            </form>
          </div>
        </div>
      </nav>
       <nav className= {[style.navBarM, style[clas]].join(' ')}>
       
           <div className={style.innerNavbar}>
            <div >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}   to = "/">Главная</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}   to = "/games">Игровые</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}  to = '/technology'>Технологии</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")}  to = "/gadjest">Гаджеты</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")} to = "/kybersport">Киберспорт</Link>
              </li>
              <li className="nav-item">
                <Link className= {['nav-link', 'active' , style.color, style.navCus].join(" ")} to = "/alvirity" >АльВиРити</Link>
              </li>
            </ul>
            </div>
           </div>
       </nav>
      </header>
      
    )
}
export default NavBar;