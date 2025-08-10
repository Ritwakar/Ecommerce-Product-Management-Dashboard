import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Nav() {
  const [products] = useContext(ProductContext);
  // const navigate = useNavigate();
  let distinct_category =
    products && products.reduce((ac, cv) => [...ac, cv.category], []);
    distinct_category = [...new Set(distinct_category)];

  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center pt-5 shadow-md">
       <a
        className="py-2 px-5 border rounded border-blue-300 text-blue-500 hover:bg-blue-100 transition"
        href="/create"
      >
        Add New Product
      </a>

      <hr className="my-3 w-[80%]" />

      <h1 className="text-2xl mb-3 w-[80%] text-center font-semibold text-gray-700">
        Category
      </h1>

      <div className="w-[80%] flex flex-col items-start">
        {distinct_category.map((c, i) => (
          <Link
            key={i}
            to={`/?category=${c}`}
            className="mb-3 flex items-center hover:scale-105 transition"
          >
            <span
              className="block w-[15px] h-[15px] mr-2 rounded-full"
              style={{
                backgroundColor: `#${Math.floor(
                  Math.random() * 16777215
                ).toString(16)}`,
              }}
            ></span>
            <span className="text-gray-800 hover:text-blue-500 capitalize">
              {c}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Nav;
