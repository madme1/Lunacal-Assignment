import React, { useRef, useState } from "react";
import "./ButtonBar.css";

export const ButtonBar = ({active,setactive}) => {




  return (
    <div className="buttonbar">
      <div className="link-menu" >
        <span className={active==="aboutme"?"start":active==="Experirces"?"mid":active==="Recommended"?"end":null}></span>
        <a className={active==="aboutme"?"active":""} onClick={()=>setactive("aboutme")}
          

           href="#">
            
          About me
          
           
          
        </a>
        <a className={active==="Experirces"?"active":""}   onClick={()=>setactive("Experirces")} 
        
        
        href="#">Experirces</a>
        <a className={active==="Recommended"?"active":""}  onClick={()=>setactive("Recommended")} 
        href="#">Recommended</a>
      </div>
    </div>
  );
};
