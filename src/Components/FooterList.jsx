import React from 'react';
import "./FooterList.css";


export default function FooterList() {
  return (
    <div class="footer-list"> 
      <div class="slider">
  
  <h2 class="custom-font"> Meet Our Authors </h2>
  
  <a href="#michael">M</a>
  <a href="#joseph">J</a>
  <a href="#dwayne">D</a>
  <a href="#nicole">N</a>

  <div class="slides">
    <div id="michael">
    <img src="https://avatars.githubusercontent.com/u/127798396?v=4">
    </img>
    </div>
    <div id="joseph">
      <img src="https://avatars.githubusercontent.com/u/56147153?v=4">
      </img>
    </div>
    <div id="dwayne">
      <img src="https://avatars.githubusercontent.com/u/122707430?v=4">
      </img>
    </div>
    <div id="nicole">
       <img src="https://avatars.githubusercontent.com/u/131828968?v=4">
       </img>
    </div>
   
  </div>
</div>
</div>
  )
}
