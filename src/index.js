import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const theme = {
  colors: {
    text: '#212121',
    secondaryText: 'gray',
    white: '#fff',
    backgroundColor: '#6a6ac3',
    acentBgcolor: '#303f9f',
    tableHeadColor: '#7189b2',
    message: '#b00a0a',
  },
  boxShadow: '0 8px 15px rgba(0, 0, 0, .1);',
  boxShadowHover: '0 15px 20px rgba(46, 229, 157, .4);',
  border: '1px solid #fff',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
