import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import CrudAppStore from './store/crudAppStore';
import AboutPage from './pages/AboutPage';
import ListPage from './pages/ListPage';
import DetailPage from './pages/DetailPage';
import {Nav, Navbar} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
      <BrowserRouter>
      <CrudAppStore>

        <Navbar bg='light'>
          <Navbar.Brand>Crud</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to='/list'>Home</Link></Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>            
          </Nav>
          </Navbar.Collapse>

        </Navbar>

        <div className='container'>
        <Switch>
          <Route path="/list" component={ListPage} exact />
          <Route path="/about" component={AboutPage} exact />
          <Route path='/detail/:id' component={DetailPage} exact />
        </Switch>
        </div>
        
        </CrudAppStore>
      </BrowserRouter>
    
  );
}

export default App;
