import React, {Component, useState} from 'react';
import  Im from'./sc.png'

class VR extends Component  {
    
   
    render(){
        return (
        <div> 
            <h1 class="center m-5 ">Follow the steps</h1>
     <div class="border-bottom">       <h1 class=" m-5 "> set up VR headset to your PC</h1></div>
     <br/>
            <ol>
<li>Connect the power adapter cable on its corresponding port on the link box, 
    and then plug the opposite end into an electrical outlet to turn the link box on</li> 
<br/>
    <li>Insert the HDMI cable on the HDMI port on the link box, and then insert the opposite end on the HDMI port on your computer's graphic card.
</li>
<br/>
<li>Insert the USB cable on the USB port on the link box, and then insert the opposite end on your computer's USB port.
</li>
<br/>
<li>Connect the 3-in-1 headset (HDMI, USB, and power) cables on the side with matching orange trims on the link box.
</li>
</ol>
<br/>
<img class="img-fluid"src={Im}/>
<h1 class=" m-5"> For more explanation</h1>
<iframe 
width="560"
 height="315" 
 src="https://www.youtube.com/embed/Pt61NxjIHr4" 
frameborder="0" 
allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

 <div class="border-bottom">       <h1 class=" m-5 "> set up Camera to your PC</h1></div>

            

<br/>
<br/>
<iframe width="560" height="315" src="https://www.youtube.com/embed/ok8iy9Vl63s" 
frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
           
        </div> );}
    }
    export default VR;


   

