import React, { useContext, useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useNavigate, useParams } from "react-router-dom";
function Edit() {
  const Navigate = useNavigate();
  const { id } = useParams();
  const [products, setProducts] = useContext(ProductContext);
  const [product, setproduct] = useState({
    title: "",
    image: "",
    category: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    setproduct(products.filter((p) => p.id == id)[0]);
  }, [id]);

  console.log(product)

  const changeHandler = (e) => {

    setproduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      product.title.trim().length < 5 ||
      product.image.trim().length < 5 ||
      product.category.trim().length < 5 ||
      product.price.trim().length < 1 ||
      product.description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters except price");
      return;
    }
   

    const pi = products.findIndex((p)=>p.id == id);

    const  copydata = [...products];
    copydata[pi] = {...products[pi], ...product};
    setProducts(copydata);
    // setproduct([...product, newproducts]);
    localStorage.setItem("products", JSON.stringify(copydata));
    Navigate(-1);
  };

  return (
    <form
      className="w-screen h-screen flex flex-col items-center p-[5%] bg-gray-50"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Edit Product</h1>
      <input
        type="url"
        name="image"
        value={product && product.image}
        placeholder="Image URL"
        onChange={changeHandler}
        className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="text"
        name="title"
        value={product && product.title}
        placeholder="Product Title"
        onChange={changeHandler}
        className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          name="category"
          value={product && product.category}
          placeholder="Category"
          onChange={changeHandler}
          className="w-[48%] bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="number"
          name="price"
          value={product && product.price}
          placeholder="Price"
          onChange={changeHandler}
          className="w-[48%] bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <textarea
        name="description"
        value={product && product.description}
        onChange={changeHandler}
        placeholder="Enter product description"
        className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button className=" py-2 px-5 border border-blue-200 rounded text-blue-400  hover:bg-blue-600  transition-all duration-200 hover:text-white">
          Update Product
        </button>
      </div>
    </form>
  );
}

export default Edit;
