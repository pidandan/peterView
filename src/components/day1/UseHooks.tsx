import React from "react";
import useMousePosition from "./Hooks";
// 在其他组件中使用自定义hooks
const TestHooks:React.FC = ()=>{
  const positions = useMousePosition();
  return(
    <div>
      <h2>自定义hooks中传递的值：x轴{positions.x}；y轴{positions.y}</h2>
    </div>
  )
}
export default TestHooks;