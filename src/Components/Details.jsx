import axios from '../utils/axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

function Details() {
  const [products, setProducts] = useContext(ProductContext); // Use global product state
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const updatedProducts = products.filter((p) => p.id !== id);
    setProducts(updatedProducts); //  Update global state
    localStorage.setItem("products", JSON.stringify(updatedProducts)); //  Update local storage
    // toast.success("Product Delete successfully!");
    navigate("/"); 
    toast.success("Product Delete successfully!");

  };

  useEffect(() => {
    if (!product) {
      setProduct(products.find((p) => p.id == id)); // ✅ Use `find` instead of `filter()[0]`
    }
  }, []);

  if (!product) {
    return <div className="text-center text-xl mt-10">Loading...</div>;
  }

  return (
    <div className='w-[70%] h-full justify-between items-center m-auto p-[10%] flex'>
      <img className='object-contain h-[70%] w-[40%]' src={`${product.image}`} alt="" />
      <div className='content w-[50%]'>
        <h1 className='text-4xl'>{product.title}</h1>
        <h3 className='text-zinc-400 my-5'>{product.category}</h3>
        <h2 className='text-red-300 mb-3'>${product.price}</h2>
        <p className='mb-5'>{product.description}</p>
        
        <Link to={`/edit/${product.id}`} className="hover:bg-blue-300 hover:text-white py-2 px-5 mr-5 border rounded border-blue-200 text-blue-300">
          Edit
        </Link>
        
        <button 
          onClick={() => handleDelete(product.id)} 
          className="hover:bg-red-300 hover:text-white py-2 px-5 border rounded border-red-200 text-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default Details;
