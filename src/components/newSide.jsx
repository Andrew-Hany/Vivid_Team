import React, {Component, useState} from 'react';
import $ from 'jquery';

import Grades  from './grades';
import Courses  from './cources';
import VR  from './VRclassrome';
import Sub  from './submission';
import Rec  from './Recording';
import Tra  from './trainer';
class Nside extends Component  {
    state={
      ong:false,
    onC:true,
     onV:false,
    onS:false,
    onT:false,
    onR:false,
  
       
    };
    jQuery= ()=> {

        $(".sidebar-dropdown > a").click(function() {
      $(".sidebar-submenu").slideUp(200);
      if (
        $(this)
          .parent()
          .hasClass("active")
      ) {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .parent()
          .removeClass("active");
      } else {
        $(".sidebar-dropdown").removeClass("active");
        $(this)
          .next(".sidebar-submenu")
          .slideDown(200);
        $(this)
          .parent()
          .addClass("active");
      }

    });
    $("#close-sidebar").click(function() {
        $(".page-wrapper").removeClass("toggled");
      });
      
      $("#show-sidebar").click(function() {
        $(".page-wrapper").addClass("toggled");
      });
}
   
      ///////////////////////
        toggleGrade=()=>{
          let ong=this.state.ong;
          if( ong==false){
this.setState({ong:!this.state.ong})
this.setState({onC:false})
this.setState({onV:false})
this.setState({onS:false})
this.setState({onR:false})
this.setState({onT:false})
        }}
    
        toggleCourse=()=>{
          let onC=this.state.onC;
          if( onC==false){
          this.setState({onC:!this.state.onC})
          this.setState({ong:false})
          this.setState({onV:false})
          this.setState({onS:false})
          this.setState({onR:false})
          this.setState({onT:false})
                  }}
              
                  toggleVr=()=>{
                    let onV=this.state.onV;
                    if( onV==false){
                    this.setState({onV:!this.state.onV})
                    this.setState({ong:false})
                    this.setState({onC:false})
                    this.setState({onR:false})
                    this.setState({onS:false}) 
                    this.setState({onT:false})         
                  }}
                            toggleSub=()=>{
                              let onS=this.state.onS;
                              if( onS==false){
                              this.setState({onS:!this.state.onS})
                              this.setState({ong:false})
                              this.setState({onC:false})
                              this.setState({onV:false})
                              this.setState({onR:false})
                              this.setState({onT:false})
                                      }}
                                      toggleRec=()=>{
                                        let onR=this.state.onR;
                                        if( onR==false){
                                        this.setState({onR:!this.state.onR})
                                        this.setState({ong:false})
                                        this.setState({onC:false})
                                        this.setState({onV:false})
                                        this.setState({onS:false})
                                        this.setState({onT:false})
                                                }}
                                                toggleTraing=()=>{
                                                  let onT=this.state.onT;
                                                  if( onT==false){
                                                  this.setState({onT:!this.state.onT})
                                                  this.setState({ong:false})
                                                  this.setState({onC:false})
                                                  this.setState({onV:false})
                                                  this.setState({onS:false})
                                                  this.setState({onR:false})
                                                          }}
                        
    render(){
        return (<div>  

<div class="page-wrapper chiller-theme toggled">
  <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
    <i class="fas fa-bars"></i>
  </a>
  <nav id="sidebar" class="sidebar-wrapper">
    <div class="sidebar-content">
                <div class="sidebar-brand">
                    <a href="#">pro sidebar</a>
                            <div id="close-sidebar">
                            <i class="fas fa-times" onClick={this.jQuery}></i>
                            </div>
                </div>
      <div class="sidebar-header">
        <div class="user-pic">
          <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg"
            alt="User picture"/>
        </div>
        <div class="user-info">
          <span class="user-name"> 
            <strong>Vivid</strong>Team
            {/* {console.log(this.props.name) && this.props.onS} */}
          </span>
          <span class="user-role">Student </span>
          <span class="user-status">
            <i class="fa fa-circle"></i>
            <span>Online</span>
          </span>
        </div>
      </div>
     
      <div class="sidebar-search">
        <div>
          <div class="input-group">
            <input type="text" class="form-control search-menu" placeholder="Search..."/>
            <div class="input-group-append">
              <span class="input-group-text">
                <i class="fa fa-search" aria-hidden="true"></i>
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="sidebar-menu">
        <ul>
          <li class="header-menu">
            <span>General</span>
          </li>
          <li >
            <a href="#">
              <i class="fa fa-tachometer-alt"></i>
              <span onClick={this.toggleCourse}>Courses</span>
              <span class="badge badge-pill badge-warning">New</span>
            </a>
            
          </li>
          <li  >
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
              <span  onClick={this.toggleGrade}>Grades</span>
              <span class="badge badge-pill badge-danger">5</span>
            </a>
            
          </li>
          <li >
            <a href="#">
            <i class="fa fa-tachometer-alt"></i>
              <span onClick={this.toggleVr}>VR Classroom</span>
            </a>
           
          </li>
          <li >
            <a href="#">
            <i class="fa fa-tachometer-alt"></i>
              <span  onClick={this.toggleSub}> 3D &amp; 2D Submission</span>
            </a>
           
          </li>
          <li >
            <a href="#">
            <i class="fa fa-tachometer-alt"></i>
              <span  onClick={this.toggleTraing}> Training </span>
            </a>
           
          </li>
          <li >
            <a href="#">
            <i class="fa fa-tachometer-alt"></i>
              <span  onClick={this.toggleRec}> recordings  </span>
            </a>
           
          </li>
          
          
          <li class="header-menu">
            <span>Extra</span>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-book"></i>
              <span>Documentation</span>
             
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-calendar"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-folder"></i>
              <span>Examples</span>
            </a>
          </li>
        </ul>
      </div>
   
    </div>
  
    <div class="sidebar-footer">
      <a href="#">
        <i class="fa fa-bell"></i>
        <span class="badge badge-pill badge-warning notification">3</span>
      </a>
      <a href="#">
        <i class="fa fa-envelope"></i>
        <span class="badge badge-pill badge-success notification">7</span>
      </a>
      <a href="#">
        <i class="fa fa-cog"></i>
        <span class="badge-sonar"></span>
      </a>
      <a href="#">
        <i class="fa fa-power-off"></i>
      </a>
    </div>
  </nav>
  
  <main class="page-content overflow-auto">
  {this.state.ong&&<Grades/>}
{this.state.onC&&<Courses/>}
{this.state.onV&&<VR
  onj={this.props.onj}
  handlejoin={this.props.handlejoin}
  />}

  {this.props.onj&&
  <div>
  <h1>simulation for engineering lab</h1>
  <br/>
  <br/>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/lKybAxJAorQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <br/>
  <br/>
  <h1>simulation for medical lab</h1>
  <br/>
  <br/>
  <iframe width="560" height="315" src="https://www.youtube.com/embed/LcD1VgOljLg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  <h1 class=" center "><span class="badge badge-danger">don't forget to disconnect before leaving </span></h1>

  </div>
  }
   {this.state.onS&&<Sub/>}
   {this.state.onR&&<Rec/>}
   {this.state.onT&&<Tra/>}
  </main>
  
  
</div>

        </div>  );
    }
}
export default Nside