import React, {Component, useState} from 'react';
import logo from './logo.svg';
import Side  from './components/newSide';
import Navbar  from './components/navbar';

import './App.css';
import $ from "jquery";


class App extends Component  {
  state={
    courses:[],
    grades:[],
    name:"vivid Team",
    
    onj:false,
  };
  handlejoin=()=>{
    this.setState({onj:!this.state.onj})
    console.log(this.state.onj)
  }
  render(){
  return (
    <div className="App">
    <Navbar
   
    />
      <Side
      name={this.state.name}
      
      onj={this.state.onj}
      handlejoin={this.handlejoin}
      />
      
      
    
    </div>
  );
}
}
export default App;
