import React, { useState } from "react";
const HookState:React.FC =()=>{
  const [clickNum,setClickNum]=useState(0);
  const [obj,setObj]=useState({name:"张三",age:16});

  const updateAge=()=>{
    let info = {...obj};
    info.name="姓名";
    info.age+=1;
    setObj(info);
  }
  return (
  <div>
    <h2>{clickNum}</h2>
    <button onClick={()=>{setClickNum(clickNum+1)}}>点赞</button>
    <div>{obj.age}</div>
    <div>{obj.name}</div>
    <button onClick={updateAge}>diandian</button>
  </div>
  )
};
export default HookState;