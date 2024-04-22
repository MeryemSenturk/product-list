import React, {useState, useEffect} from 'react'
import axios from 'axios';

const Header = ({ categories, setCategories }) => {
  const [cate, setCate] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then((res) => {
      setCate(["all", ...res.data]);
    });
  }, []);

  return (
    <div className="bg-secondary ">
      <h1>PRODUCT LIST</h1>
      <div className="btns p-2">
        {" "}
        {cate.map((item, index) => {
          return (
            <button
              className="btn btn-primary m-1"
              onClick={() => setCategories(item)}
              key={index}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;