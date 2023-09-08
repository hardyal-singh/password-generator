import React from 'react'
import { useState } from 'react'
export default function Home() {
  //const data=localStorage.getItem("num")
  
  const data=sessionStorage.getItem("num")
  console.log(data)
  let data1;

  if (data===null){
    data1=0;
  }else{
    data1=parseInt(data)
  }
  let  [num ,setNum]=useState(data1);
  
 
const fun=()=>{setNum(num+1)
};
sessionStorage.setItem("num",num);
//localStorage.setItem("num",num);



  return (
    <>
    <p>Number:{num}</p> 
    <input type='button' onClick={fun} value={"Submit"}/>
    </>
  )
}
