import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Apicall() {
    let [fetchItem, setfetchItem]=useState([])
    useEffect(()=>{
        Calling();
    },[])
    async function Calling(){
        let api ="https://dummyjson.com/products";
        let res = await axios(api);
        setfetchItem(res.data.products);

    }
  return fetchItem
}

export default Apicall