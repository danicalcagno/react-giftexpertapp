import React from 'react';
import {createRoot} from 'react-dom/client';
import {GiftExpertApp} from './GiftExpertApp';
import './index.css';

// react 18
const divRoot = document.getElementById('root');
const root = createRoot(divRoot);

root.render(<GiftExpertApp />);

