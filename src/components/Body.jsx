import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import CharityList from "./CharityList";
import Favourite from "./Favourite";
import Banner from "./Banner";
import CharityDetail from "./CharityDetail";

const Body = () =>{
    const router = createBrowserRouter([
        {
          path:"/",
          element:<Home/>,
          children:[
            {
              path:'/',
              element:<Banner/>
            },
            {   
                path:'/CharityList',
                element:<CharityList/>
            },
            {   
                path:'/charity/:id',
                element:<CharityDetail/>
            },
            {
                path:"/Favourite",
                element:<Favourite/>
            }
          ]
        },  
        
    ])
    return(
        <RouterProvider router={router} />
    )
}
export default Body;