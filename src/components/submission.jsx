import React, {Component, useState} from 'react';
import  Imge from'./images.jpeg'
import  Imge1 from'./Unknown-3.jpeg'
import  Imge2 from'./Unknown-1.jpeg'
import  Imge3 from'./Unknown.jpeg'
class sub extends Component  {
    
    buttontext=()=>{
        
        
        

      };
    render(){
        return (
        <div> 
             <h1 class="center" > Before uploading make sure that you used the right camera and made the required assignment </h1>
            <br/>
            <br/>
            <p class=" pa badge badge-info sub">if you are going to submit 3D assignment please make sure that you used this camera</p>
            <img class=" Image2"src={Imge}/>
            <p class="pa badge badge-info sub">if you are going to submit 2D assignment, just use any thing: </p>
            <img class=" Image2"src={Imge3}/>
            <img class=" Image2"src={Imge2}/>
            <img class=" Image2"src={Imge1}/>
            
            <button class="btn btn-primary button" >upload
            </button>
        </div> );
        
    
    }
    }
    export default sub;


   