import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Header } from '../shared/Header';

window.addEventListener('load', () => {
  const root = ReactDOM.createRoot(document.getElementById('react_root'));
  root.render(<Header />);
});
