import React, {Component, useState} from 'react';

class Nav extends Component  {
    state={
      
    
     
        
  
       
    };
    render(){
        return (
        <div> 
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand vividteam" >Team Vivid</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                

                                <form class="form-inline my-2 my-lg-0 float">
                                    <input class="form-control mr-sm-2 " type="search" placeholder="username" aria-label="Search" />
                                    <input class="form-control mr-sm-2 " type="search" placeholder="password" aria-label="Search"/>
                                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"  >Sign in</button>
                                </form>
                    </div>
                </nav>
      </div> );}
    }
    export default Nav