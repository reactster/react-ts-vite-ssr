import HomePage from './pages/home/page';
import homeLoader from './pages/home/loader';

const routes = [
    {
        path: "/",
        loader: homeLoader,
        Component: HomePage,
    },
];

export default routes