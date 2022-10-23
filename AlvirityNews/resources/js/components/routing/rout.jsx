
import Games from '../sheets/Games';
import Technolog from '../sheets/Technology';
import Gadjest from '../sheets/Gadjest';
import Kybersport from '../sheets/Kybersport';
import Alvirity from '../sheets/Alvirity';
import App from '../App';
import Postid from '../Posts/Postid';

 const rout = [
  {path : "/", element: <App/>, exact: true},
  // {path : "*", element: <App/>, exact: true},
  {path : "/games", element: <Games/>, exact: true},
  {path : "/technology", element: <Technolog/>, exact: true},
  {path : "/gadjest", element: <Gadjest/>, exact: true},
  {path : "/kybersport", element: <Kybersport/>, exact: true},
  {path : "/alvirity", element: <Alvirity/>, exact: true},


  {path : "/games/:id", element: <Postid/>, exact: true},
  {path : "/technology/:id", element: <Postid/>, exact: true},
  {path : "/gadjest/:id", element: <Postid/>, exact: true},
  {path : "/kybersport/:id", element: <Postid/>, exact: true},
  {path : "/alvirity/:id", element: <Postid/>, exact: true},
  {path : "/actual/:id", element: <Postid/>, exact: true},
 

]
export default rout;