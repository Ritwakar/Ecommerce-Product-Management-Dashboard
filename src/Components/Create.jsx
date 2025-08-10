import React, { useContext, useState } from "react";
import { nanoid } from "nanoid";
import { ProductContext } from "../utils/Context";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
function Create() {
  const Navigate = useNavigate();
  const [product, setproduct] = useContext(ProductContext);
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      title.trim().length < 5 ||
      image.trim().length < 5 ||
      category.trim().length < 5 ||
      price.trim().length < 1 ||
      description.trim().length < 5
    ) {
      alert("Each and every input must have atleast 4 characters except price");
      return;
    }
    const newproducts = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    setproduct([...product, newproducts]);
    localStorage.setItem("products",JSON.stringify([...product, newproducts]))
    toast.success("Product Added successfully")
    Navigate("/");
  };

  return (
    <form
      className="w-screen h-screen flex flex-col items-center p-[5%] bg-gray-50"
      onSubmit={handleSubmit}
    >
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Add New Product</h1>
      <input
        type="url"
        onChange={(e) => setImage(e.target.value)}
        value={image}
        placeholder="Image URL"
        className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        placeholder="Product Title"
        className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
      />

      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
          placeholder="Category"
          className="w-[48%] bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />

        <input
          type="number"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
          placeholder="Price"
          className="w-[48%] bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Enter product description"
        className="w-1/2 bg-white border border-gray-300 rounded-lg p-3 mb-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
        rows="10"
      ></textarea>

      <div className="w-1/2">
        <button className=" py-2 px-5 border border-blue-200 rounded text-blue-400  hover:bg-blue-600  transition-all duration-200 hover:text-white">
          Add New Product
        </button>
      </div>
    </form>
  );
}

export default Create;
