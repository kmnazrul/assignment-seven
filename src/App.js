import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Courses from './components/Courses/Courses';
import Footer from './components/Footer/Footer';

class App extends Component {
  render(){
    return (
      <div>
        <Header></Header>
        <Courses></Courses>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
