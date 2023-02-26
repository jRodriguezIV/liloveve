import { useState, useEffect } from 'react';
import './App.css';

const API_BASE = "https://dummyjson.com/";

function App() {
  const [ product, setProduct ] = useState([])

  useEffect(() => {
    function getProductInfo(){
      const url = `${API_BASE}/products/`;
        fetch(url)
          .then((result) => result.json())
          .then((data) => {
            console.log(data)
            setProduct(data)   
          });
    }
      getProductInfo()
  },[]);
   
  return (
    <div>
      
    </div>
  );
}

export default App;