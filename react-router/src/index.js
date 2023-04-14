import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/Home';
import Learn from './components/Learn';
import Courses from './components/Courses';
import Bundles from './components/Bundles';
import CourseId from './components/CourseId';
import Dashboard from './components/Dashboard';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, 
        Routes, 
        Route, 
        Navigate,
        } 
        from 'react-router-dom'
import Dashboad from './components/Dashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /* 
    Creating Routes for navigaing the users 
    (Read Goggle Docs(Getting Started With React) for more clear explanation)
  */
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/myapps' element={<Navigate replace to="/learn" />}/>
      <Route path='/learn' element={<Learn/>}>
        <Route path='courses' element={<Courses/>}>
          <Route path=':courseid'element={<CourseId/>} />
        </Route>
        <Route path='bundles' element={<Bundles/>} />
      </Route>
      <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
  </Router>
);

reportWebVitals();
