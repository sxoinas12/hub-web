import React from 'react';
import logo from './logo.svg';
import './App.css';
import Provider from './Services/ProviderService';


import Home from './Home/index';



function App() {
  return (
    <div className="App">
     <Provider>
      	<Home />
      </Provider>
    </div>
  );
}

export default App;
