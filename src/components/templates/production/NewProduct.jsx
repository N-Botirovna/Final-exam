import React, { useState } from "react";
import Matras from "../../../assets/images/image.svg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const NewProduct = ({
  weight,
  warranty,
  size,
  name,
  cost,
  capacity,
  images,
  new_cost,
}) => {
  const [item, setItem] = useState("");

  return (
    <div className="mb-10">
      <div className="flex bg-[#F6FBFF]  border border-[#C7DFF5] py-6">
        <div className="w-[50%] relative">
          <img className="mt-20 ml-10" src={Matras} alt="images" />
          <h1 className="absolute px-3 py-2 bg-pink-500 text-white rounded text-[14px] left-6 top-1">
              YANGI MAXSULOT
            </h1>
        </div>
        <div className="w-[60%] pr-8">
          <h1 className="text-[40px] font-[700] text-[#01384D] mb-8">{name}</h1>
          <div className="flex space-x-16 mb-[40px]">
            <div>
              <p className="text-slate-500">Yuklama</p>
              <h1 className="text-[33px] font-[700] text-[#01384D]">
                {weight} <span className="text-[22px] ml-[-8px]"> kg </span>
              </h1>
            </div>
            <div>
              <p className="text-slate-500">Kafolat</p>
              <h1 className="text-[33px] font-[700] text-[#01384D]">
                {warranty} <span className="text-[22px] ml-[-8px]"> yil </span>
              </h1>
            </div>
            <div>
              <p className="text-slate-500">O'lchami</p>
              <h1 className="text-[33px] font-[700] text-[#01384D]">{size}</h1>
            </div>
            <div>
              <p className="text-slate-500">Sigimi</p>
              <h1 className="text-[33px] font-[700] text-[#01384D]">
                {capacity} <span className="text-[22px] ml-[-8px]"> kishilik </span>
              </h1>
            </div>
          </div>
          <div>
            <p className="w-[90%] mb-[30px] text-slate-500">
              Penatibus viverra gravida rhoncus in. At turpis morbi ante tortor
              a est. Habitant adipiscing ut sed pulvinar tellus, ut urna,
              fermentum. Porttitor senectus lorem rhoncus facilisi ac dictum
              varius egestas.
            </p>
          </div>
          <div className="mb-[10px]">
            <p className="text-slate-500">Narxi</p>

            <h1 className="text-[30px] text-[#01384D] font-[700]">{cost}</h1>
          </div>
          <div>
            <button className="px-4 py-2 border-2 border-slate-500 rounded bg-white font-bold items-center">
              Buyurtma berish <FontAwesomeIcon icon={faCartShopping} />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
