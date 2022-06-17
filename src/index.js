import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Post from './components/FilterCategories';
import Line from './components/Line'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <App />
        <Line /> */}
        <Post />
    </React.StrictMode>
);