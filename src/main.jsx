import React from 'react';
import ReactDOM from 'react-dom/client';

import { GifGalleryApp } from './GifGalleryApp';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
    	<GifGalleryApp />
    </React.StrictMode>,
)
