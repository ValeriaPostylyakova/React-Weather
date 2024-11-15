import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import DashBoard from './page/DashBoard.tsx';
import { createGlobalStyle } from 'styled-components';
import Map from './page/Map.tsx';
import Calendar from './page/Calendar.tsx';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Open Sans", sans-serif;
        font-size: 16px;
        font-weight: 400;
    }

    ul, ul li {
        list-style: none;
    }

    a {
        color: inherit; 
        text-decoration: none; 
        background-color: transparent;
        cursor: pointer;
    }
`;

const router = createBrowserRouter([
    {
        path: '/React-Weather/',
        element: <DashBoard />,
    },
    {
        path: '/React-Weather/map',
        element: <Map />,
    },
    {
        path: '/React-Weather/calendar',
        element: <Calendar />,
    },
]);

createRoot(document.getElementById('root')!).render(
    <>
        <RouterProvider router={router} />
        <GlobalStyle />
    </>
);
