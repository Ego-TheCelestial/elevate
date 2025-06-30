import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import Pagination from './components/Pagination';

function App() {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState([]);

    function searchedData() {
        const data = products.filter(prod => prod.title.toLowerCase() === searchTerm.toLowerCase());
        setFilteredData(data);
    }


    useEffect(() => {
        const fetchProducts = async() => {
            const res = await axios.get("https://fakestoreapi.com/products");
            const data = res.data;
            setProducts(data);
            setFilteredData(data);
        }
        fetchProducts();
    }, [])

    useEffect(() => {

    })


  return (
    <>
      <div>
        <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} searchedData={searchedData} />
      </div>
      <div className='flex flex-wrap gap-5 ml-25'>
        {
            filteredData.map((product) => (
                <ProductCard key={product.id} product={product.image} title={product.title} price={product.price} category={product.category} image={product.image} />
            ))
        }
      </div>
      <div>
        <Pagination />
      </div>
    </>
  )
}

export default App
