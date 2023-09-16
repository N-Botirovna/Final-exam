import React, { useEffect, useState } from "react";

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

const TecBox = () => {

  const url = "http://localhost:1212/api/technology";

  const { data, isPending, error } = useFetch(url);

  return (
    <>
    <div className="flex justify-between flex-grow items-center mb-10">
        {
            data?.map((item)=>(
                <div className="text-center mb-10 " key={item.id}>
                    <h1 className="text-[30px] font-[600] mb-4">{item.name}</h1>
                    <iframe className="h-[200px] w-[420px] mb-5"  src={item.link} ></iframe>
                    <p className="text-slate-500 px-10">{item.description}</p>
                </div>
            ))
        }
    </div>
    </>
  )
}

export default TecBox;
