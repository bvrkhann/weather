import React from "react";
import "./topButtons.css";

function TopButtons({setCity}) {


  return (
    <header>
    <div>
        <ul className="nav">
            <li className="left" onClick={()=> setCity('Almaty')}>Almaty</li>
            <li onClick={()=> setCity('Shymkent')}>Shymkent</li>
            <li onClick={()=> setCity('Oral')}>Oral</li>
            <li onClick={()=> setCity('Astana')}>Astana</li>
            <li onClick={()=> setCity('Atyrau')}>Atyrau</li>
        </ul>
    </div>
    </header>
  );
}

export default TopButtons;