import React, {useState, useEffect } from 'react'
import Apicall from './Apicall';

function ProductList() {
  let data = Apicall();
  console.log(data)
  const [allBookarr,setallBookarr]=useState(data);
  useEffect(()=>{
    if(data&&data.length){
      console.log(setallBookarr(data));
    }
  },[data])
 
  return (
    <div className='flex justify-center flex-wrap gap-5'>
    {
      allBookarr.map((data,index)=>{
        return (
          <>
          <div className='border-amber-600 border-2'>
          <h1>{index+1}</h1>
            <img width={150} heigth={100} src={data.images[0]} alt="" />
          <h1>{data.title}</h1>
          <h1>{data.category}</h1>
          <h1>category</h1>
          </div>
          </>
        )
      })
    }
    </div>
  )
}

export default ProductList;