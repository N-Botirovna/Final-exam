import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import city from "../../../assets/images/city.png"
function useFetch(url) {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
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


const Address = () => {
  const url = "http://localhost:1212/api/address";

  const { data, isPending, error } = useFetch(url);

  return (
    <div className="mb-10">
      <div className="container mx-auto">
        <div>
          {data?.map((item) => (
            <div className="flex justify-between">
              <div>
                <h1 className="text-[50px] font-[700] text-[#01384D] mb-10">Manzilimiz</h1>
                <h1 className="text-[30px] font-[600] text-[#01384D] mb-6">{item.location}</h1>
                <p className="mb-10">{item.destination}</p>
                <Link
                  className="ms-0 px-4 py-2 border-2 border-slate-500 rounded bg-white font-bold mb-10 text-2xl hover:text-[white] hover:bg-[#01384D]"
                  to={item.geolacation}
                >
                  <FontAwesomeIcon icon={faLocationDot} /> Geolocation{" "}
                </Link>
              </div>
              <div>
                <img className="h-100" src={city} alt="vrf" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Address;
