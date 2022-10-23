import Slider from "react-slick";
import Postv2 from "./Postv2";

const Postsv2 = ({data, props, styles, sect})=> {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,    
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 830,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                
              }
            },
              ]   
      };
   
      data = data.filter(e=> e.id_category == props);

    return (
        <>
        
        <div className= {'container'} style = {{maxWidth : '100%'}}>
        <Slider className="item2" {...settings} >
            {
              data.map((e)=> <Postv2 props={e} key = {data.id} sect = {sect}/>)
            }               
        </Slider>
        </div>
        
      
    
    
            
        </>
    )
}
export default Postsv2;