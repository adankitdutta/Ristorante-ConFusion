import React from 'react';
import {Navbar,NavbarBrand} from 'reactstrap';
import './App.css';
import Menu from './components/MenuComponent';
import {Dishes} from './shared/dishes';

function App() {

  return (
    <div>
      <Navbar dark color='primary'>
        <div className="container">
          <NavbarBrand href="/">Restaurant Confusion</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={Dishes}/>
    </div>
  );
}

export default App;
