import React, {Component, useState} from 'react';
import  Img from'./download.jpg'

class VR extends Component  {
    
  
    render(){
        return (
        <div> 
            <h4 class="center">Please make sure your VR DEVICE is connected</h4>
            <br/>
            <br/>
            <img class="  img-fluid Image"src={Img}/>
            <button class="btn btn-primary button" onClick={this.props.handlejoin}>
            
            {this.props.onj===false && <span>join Classroom</span>}
            {this.props.onj===true && <span>disconnect</span>}
            </button>
        </div> );}
    }
    export default VR;


   



   