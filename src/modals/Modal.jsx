import React, { useEffect, useState } from "react";
import Backdrop from '../../src/assets/images/modalImage.svg'
import LoginInput from "../components/ui/LoginInput";
import PhoneNumber from "../components/ui/PhoneNumber";
import SubmitButton from "../components/ui/SubmitButton";
import Title from "../components/ui/Title";

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
const Modal = ({showContent, setShowContent}) => {
  const url = "http://localhost:1212/api/products";

  const { data, isPending, error } = useFetch(url);

  

  const [count, setCount] = useState(1);

  const [isSend, setIsSend] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleBtnM = () => {
    setCount(count - 1);
  };

  const handleBtnP = () => {
    setCount(count + 1);
  };

  const handleSend = () =>{
    setIsSend(true)
  }

  const handleExit = () => {
    setShowContent(false);
  };

  return (
    <div>
      <div className="w-[100%] h-[100%] fixed bg-white right-0 left-0 top-0 py-[80px]">
        <div className="rounded w-[500px] h-[600px] mx-auto bg-blue-gray-200 box-border">
          <button className="pt-5 pl-5 float-right text-[20px] leading-[5px] text-slate-600 font-bold" onClick={()=>handleExit()}>X</button>
         { !isSend ?
            <div className="px-6 py-6">
            <Title title={"Buyurtma qilish"}/>
            <form onSubmit={handleSubmit}>
              <LoginInput placeholder={"Ismizngizni kiriting:"} />
              <PhoneNumber />
              <div className="mb-8">
                <label
                  className="block text-[#01384D] text-[18px] border-slate-500 rounded"
                  cl
                  htmlFor="product"
                >
                  Mahsulot toifasini tanlang
                </label>
                <select
                  className="block w-[100%] py-2 px-3 rounded border border-slate-500"
                  name=""
                  id="product"
                >
                  <option value=""></option>
                  {data?.products?.map((item) => (
                    <option className="px-3" value={item.category}>
                      {item.category}
                    </option>
                  ))}
                </select>
              </div>
              <label className="block text-[#01384D] text-[18px]" htmlFor="">
                Miqdorini tanlang
              </label>
              <div className="flex text-center w-[100%] bg-white rounded mb-6">
                <button
                  className="border-2  border-[#01384D] px-5 py-3 rounded-s"
                  onClick={() => handleBtnM()}
                >
                  -
                </button>
                <div className="border-b-2 border-t-2 border-[#01384D] px-5 py-3 w-[100%]">
                  {count}
                </div>
                <button
                  className="border-2  border-[#01384D] px-5 py-3 rounded-e"
                  onClick={() => handleBtnP()}
                >
                  +
                </button>
              </div>
              
              <SubmitButton title={"Yuborish"} onClick = {handleSend}/>
            </form>
          </div> :
          <div className="py-6 px-6">
            <h1 className="text-[30px] text-[#01384D] font-[700] mb-6 text-center">Arizangiz muvofaqiyatli yuborildi</h1>
            <img className="w-[70%] mx-auto mb-8" src={Backdrop} alt=" mnjkj" />
            <SubmitButton onClick={handleExit} title={"OK"} />
          </div>
         }
        </div>
      </div>
    </div>
  );
};

export default Modal;
