import React from 'react';
import ReactDOM from 'react-dom/client';
import store from './Components/Store/store';
import App from './Components/App/App';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NewsCardsList from './Components/NewsCardsList/NewsCardsList';

const router = createBrowserRouter([
    {
        path: 'https://tatiana190389.github.io/News_Feed/',
        element: <App />,
        children: [{ index: true, element: <NewsCardsList /> }],
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
