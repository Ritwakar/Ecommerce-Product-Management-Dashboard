import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Nav from "./Nav";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";

function Home() {
  const [products] = useContext(ProductContext);
  const { search } = useLocation();
  const category = decodeURIComponent(search.split("=")[1] || ""); //  Fallback to an empty string

  const [filteredProduct, setFilteredProduct] = useState([]); //  Default empty array

  useEffect(() => {
    if (!category) {
      //  Show all products when no category is selected
      setFilteredProduct(products);
    } else {
      //  Correct filtering logic
      setFilteredProduct(products.filter((p) => p.category === category));
    }
    console.log("Filtered Products:", filteredProduct); 
  }, [category, products]);

  if (!products) {
    return <Loading />;
  }

  return (
    <>
      <Nav />
      <div className="w-[85%] h-full pt-[5%] p-10 flex flex-wrap overflow-x-hidden overflow-y-auto">
        {filteredProduct.length > 0 ? (
          filteredProduct.map((p, i) => (
            <Link
              key={p.id || i}
              to={`/details/${p.id}`}
              className="mr-3 mb-3 card p-3 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center"
            >
              <div
                className="hover:scale-110 mb-3 w-full h-[80%] bg-contain bg-no-repeat flex flex-col bg-center justify-start align-center"
                style={{ backgroundImage: `url(${p.image})` }}
              ></div>
              <h1 className="hover:text-blue-300">{p.title}</h1>
            </Link>
          ))
        ) : (
          <p>No products found.</p> 
        )}
      </div>
    </>
  );
}

export default Home;
