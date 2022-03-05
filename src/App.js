import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';


function App() {
  return (
    <div className="App">
    
      <Router>
    
        <Header/>

        <AppBody>
          <Sidebar/>
          <Routes>
            <Route path='/'  element={<Chat />} exact />
            {/* <Route path='/' exact /> */}
          </Routes>
        </AppBody>

      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;