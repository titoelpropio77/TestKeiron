import { render } from 'react-dom';
import * as ReactRouterDOM from 'react-router-dom';
import React from 'react';
import App from './components/App';

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

render((
 <ReactRouterDOM.BrowserRouter>
  <App/>
 </ReactRouterDOM.BrowserRouter>
), document.getElementById('react-login'));
