import Home from "../views/Home/index";
import More from "../views/More/index";
import Order from "../views/Order/index";
import Mine from "../views/Mine/index";

export const mainRouter = [
    {
        path: '/home',
        component: Home,
    },
    {
        path: '/more',
        component: More,
    },
    {
        path: '/order',
        component: Order,
    },
    {
        path: '/mine',
        component: Mine,
    }
];
