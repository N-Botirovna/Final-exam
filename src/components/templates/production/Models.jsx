import React, { useState, useEffect } from "react";
import Box from "./NewProduct";
import Aksiya from "./Aksiya";
import NewProduct from "./NewProduct";
import ProjectsTitle from "../../ui/ProjectsTitle";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect
  (() => {
    const fetchData = async () => {
      setIsPending(true);
      try {
        const req = await fetch(url);
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIsPending(false);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsPending(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isPending, error };
}


const Models = () => {
  const url = "http://localhost:1212/api/products";

  const { data, isPending, error } = useFetch(url);

  console.log(data);

  const [page, setPage] = useState([]);

  console.log(data);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBtn = (category) => {
    if (data?.products) {
      let items = [];
      for (const item of data.products) {
        if (item.category == category || !category) {
          items.push(item);
        }
      }
      setPage(items);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <ProjectsTitle title={"Bizning mahsulotlar"} />
        <form className="flex text-[20px]" onSubmit={handleSubmit}>
          <button
            onClick={() => handleBtn()}
            className={
              { page }
                ? "focus:font-[700] focus:border-b-4 border-stone-900 mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border "
                : "mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border"
            }
          >
            Barchasi
          </button>
          {data?.categories?.map((item) => (
            <button
              onClick={() => handleBtn(item.category)}
              className={
                page
                  ? "focus:font-[700] focus:border-b-4 border-[#C7DFF5] mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border "
                  : "mr-[35px] px-3 py-3 rounded hover:bg-slate-300 box-border"
              }
              key={item.id}
            >
              {item.category}
            </button>
          ))}
        </form>
      </div>
      <div className="border-solid border-b-4 mt-[-4px] mb-[30px]"></div>
      <div className="container mx-auto">
        {page?.map((page) =>
          page.new_cost == null ? (
            <NewProduct key={page.id}
              weight={page.weight}
              warranty={page.warranty}
              size={page.size}
              name={page.name}
              cost={page.cost}
              capacity={page.capacity}
              images={page.product_images}
              new_cost={page.new_cost}
            />
          ) : (
            <Aksiya
             key={page.id}
              weight={page.weight}
              warranty={page.warranty}
              size={page.size}
              name={page.name}
              cost={page.cost}
              capacity={page.capacity}
              images={page.product_images}
              new_cost={page.new_cost}
            />
          )
        )}
        
        {}
      </div>
    </>
  );
};

export default Models;
