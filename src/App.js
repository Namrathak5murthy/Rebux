import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menubar from './Menubar';
import Register from './Register';

class App extends Component {
  render() {
    let links = [
      { label: 'Home', link: '#home', active: true },
      { label: 'Class', link: '#about' , },
      { label: 'Product', link: '#Product' },
      { label: 'About Us', link: '#About-us' },
    ];

  return (
    <div className="container center">
    <Menubar links={links} logo={logo} onSearch={this.handleSearch} />
  <Register/>
   
  </div>
  );
}
}

export default App;
