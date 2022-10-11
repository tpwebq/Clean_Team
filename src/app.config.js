import About from "./views/about";
import Basket from "./views/basket";
import Comingsoon from "./views/comingsoon";
import Contact from "./views/contact";
import Error from "./views/error";
import Index from "./views/index";
import Privacy from "./views/privacy";
import Services from "./views/services";

const ROUTES = [
    {navbarItem:true, path: "/",component:<Index/>},
    {navbarItem:true, path: "/services",component:<Services/>},
    {navbarItem:true, path: "/about",component:<About/>},
    {navbarItem:true, path: "/contact",component:<Contact/>},
    {navbarItem:true, path: "/basket",component:<Basket/>},
    {navbarItem:false, path: "/comingsoon",component:<Comingsoon/>},
    {navbarItem:false, path: "/privacy",component:<Privacy/>},
    {navbarItem:false, path:"*",component:<Error/>}
];

export {
    ROUTES
};