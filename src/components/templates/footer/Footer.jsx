import { Navbar } from "../header";

import Facebook from "../../../assets/images/facebook.svg"
import CopyRight from "./CopyRight";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="bg-white">
                <div className="mx-auto container justify-between flex  border-b py-10">
                    <ul className='flex items-center space-x-16 fonts-[500]  text-[20px] text-[#01384D]'>
                        <li>
                            <Link to={"/"}>Katalog</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Aksiya</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Biz haqimizda</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Manzilimiz</Link>
                        </li>
                        <li>
                            <Link to={"/"}>Aloqa</Link>
                        </li>
                    </ul>
                    <div className="items-center flex">
                        <img src={Facebook} alt="" />
                    </div>
                </div>
                <CopyRight />
            </div>

        </>
    )
}
export default Footer