import Post from "./Post";
import Slider from "react-slick";
const Posts = ({data})=> {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 880,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
              }
            },
            {
              breakpoint: 520,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true
                }
              }
            ]
      };
      data = data.filter(e=>  e.id_category == 1);
    return (
        <>
        <div className= {'container'} style = {{ maxWidth: '1460px'}}>
        <Slider className="item1" {...settings} >
    
            {
              data.map (e=> <Post props={e} key = {e.id}/>   )
            }               
        </Slider>
        </div>
      
    
    
            
        </>
    )
}
export default Posts;