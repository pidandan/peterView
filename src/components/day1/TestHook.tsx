import React, { useEffect, useState,useRef } from "react";
const TestHook:React.FC=()=>{
  const [like,setLike]=useState(0);
  const reference = useRef(0);
  useEffect(()=>{
    console.log("方法执行了");
  });

  const someHandler = () => {
    // 获取值
    let value = reference.current;
     // 更新值
    let newValue = value++;
    reference.current = newValue;
    console.log("useRef中获取值",value);
  };
  return (
    <div>
      <button onClick={()=>{setLike(like + 1)}}>{like}点击</button>
      <button onClick={someHandler}>{like}点击</button>
    </div>
  );
};
export default TestHook;