import Banner from "../../../assets/images/bg_header.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";
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
const Hero = () => {
  const url = "http://localhost:1212/api/carousel";
  const { data, isPending, error } = useFetch(url);

  console.log(data);

  return (
    <div className="py-10 mt-10">
      {isPending && <div>Loading...</div>}
      {error && <div>Error</div>}
      <Carousel
        className="rounded-xl w-screen flex gap-[200px] "
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-3">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 w-6 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {data?.map((item) => (
          <div className="relative w-screen mx-auto container mr-5 h-screen " key={item.id}>
            <div className="absolute top-0 left-0 w-full h-full">
              <h1 className="w-3/5 text-[90px] text-[#01384D] text-start font-[700] mb-10">
                {item.title}
              </h1>
              <div className="w-[18%]">
                <button className="ms-0 px-4 py-2 border-2 border-slate-500 rounded text-[20px] bg-white font-bold mb-10 hover:text-[white] hover:bg-[#01384D] transition-all">
                  Kategoriyalar <FontAwesomeIcon icon={faArrowRightLong} />
                </button>
              </div>
             
            </div>
            <img
              className="absolute right-0 bottom-[290px] mr-0 h-[500px] "
              src={Banner}
              alt=""
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
