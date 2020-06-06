import React, {Component, useState} from 'react';

class Grades extends Component  {
    
    render(){
        return (
        <div> 
            <h1>Grades</h1>
            <br/>
        <div class="form-group col-md-12">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading"> Chemisrty Lab <span class=" grades  badge-pill badge-success">100%</span> </h4>
            
          </div>
        </div>
        
        <div class="form-group col-md-12">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading"> physics Lab<span class=" grades  badge-pill badge-danger ">60%</span> </h4>
          </div>
        </div>

        
        <div class="form-group col-md-12">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading"> Architecture Lab <span class=" grades  badge-pill badge-danger">40%</span> </h4>
            
          </div>
        </div>
        <div class="form-group col-md-12">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading"> Mechanical Lab <span class=" grades  badge-pill badge-warning">80%</span> </h4>
            
          </div>
        </div>

<div class="form-group col-md-12">
          <div class="alert alert-success" role="alert">
            <h4 class="alert-heading"> ComputerScience Lab <span class=" grades  badge-pill badge-success">92%</span> </h4>
            
          </div>
        </div>


        </div> );}
    }
    export default Grades