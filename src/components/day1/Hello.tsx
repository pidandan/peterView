// import React from 'react';
// // 定义props的数据类型
// interface IHelloPops{
//   message:string
// }
// const Hello = (props:IHelloPops)=>{
//   return <h2>{props.message}</h2>
// }
// export default Hello;

// 方法二使用React中提供的FC函数进行组件定义
import React from 'react';
interface IHelloPops {
  message:string
}
const Hello: React.FC<IHelloPops>=(props)=>{
  return <h2>{props.message}</h2>
}
Hello.defaultProps={
  message:"hello China"
};
export default Hello;