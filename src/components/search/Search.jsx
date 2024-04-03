import React, { useState } from 'react'

const Search = ({inputValue,setInputValue}) => {
   

// console.log(inputValue);
  return (
    <div className="container m-auto text-center p-3">
      <input type="text" className="m-auto form-control w-75" placeholder="Search" onChange={(e) => setInputValue(e.target.value)} value={inputValue}/>
    </div>
  );
}

export default Search