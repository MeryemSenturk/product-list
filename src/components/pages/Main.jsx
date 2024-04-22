import React, {useEffect, useState} from 'react'
import axios from "axios"
import Header from '../header/Header'
import ProductCard from '../productCard/ProductCard'
import Search from '../search/Search'


const Main = () => {

    const [products,setProducts] = useState([])
    const [categories,setCategories]=useState("all")


    useEffect(()=>{
axios.get("https://fakestoreapi.com/products").then(res=>{
    setProducts(res.data);
})
    },[])

   
     const filterPro = (() => {
       if (categories === "all") {
         return products;
       } else {
         return products.filter((p) => p.category===categories);
       }
     })();


const [inputValue, setInputValue] = useState("")

const filteredWithSearch = filterPro.filter(item => item.title.toLowerCase().includes(inputValue.toLowerCase()))
console.log(filteredWithSearch);

  return (
    <div>
      <Header categories={categories} setCategories={setCategories} />

      <Search inputValue={inputValue} setInputValue={setInputValue} />

      <div className="cardContainer row container m-auto gap-1">
        {filteredWithSearch.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Main;