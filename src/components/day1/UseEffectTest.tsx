import React, { useEffect, useState } from "react";
const MouseTracker:React.FC= ()=>{
  const [positions,setPositions]=useState({x:0,y:0});
  useEffect(()=>{
    const updateMouse=(e:MouseEvent)=>{
      console.log('inner');
      setPositions({x:e.clientX,y:e.clientY});
    }
    document.addEventListener('click',updateMouse);
    return ()=>{
      document.removeEventListener('click',updateMouse);
    }
  });
  return (
    <div>x:{positions.x},y:{positions.y}</div>
  );
}