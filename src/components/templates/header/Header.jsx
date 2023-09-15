import LogoOrder from "../../../assets/images/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Navbar from "./Navbar"
import Hero from "./Hero"
import Modal from "../../../modals/Modal"
import { useState } from "react"



const Header = () => {
    const [showContent, setShowContent] = useState(false);



    return (


        <>
            <div className='bg-[#EABF9F]'>
                <div className='container mx-auto'>
                    <div className='mb-4'>
                        <Navbar />
                    </div>
                    <div className="clear-both"></div>
                    <div>

                        <div className="flex justify-between items-center mb-20">
                            <div>
                                <img src={LogoOrder} alt="" />
                            </div>
                            <div className="flex items-center space-x-20">
                                <h1><FontAwesomeIcon icon={faPhone} />  +998 90 123 45 67</h1>
                                <button onClick={() => setShowContent(true)} className="px-4 py-2 border-2 border-slate-500 rounded bg-white font-[600] text-[20px] hover:text-[white] hover:bg-[#01384D]">Buyurtma berish</button>
                            </div>
                        </div>
                    </div>
                    <Hero />
                </div>
            </div>

            {
                showContent && <Modal showContent={showContent} setShowContent={setShowContent} />
            }
        </>

    )
}

export default Header;