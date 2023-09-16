import React from 'react'
import Van from "../../../assets/images/ChooseVan.svg"
import Call from "../../../assets/images/ChooseCall.svg"
import Hand from "../../../assets/images/ChooseHand.svg"
import ProjectsTitle from '../../ui/ProjectsTitle'

const Advantage = () => {

    const boxes = [
        {
            id:1,
            pic:Van,
            name:"Yetkazib berish",
            text:"Toshkent bo'ylab bepul o'lchov va etkazib berish",
            number:null
        },
        {
            id:2,
            pic:Call,
            name:"Qo'llab-quvvatlash",
            text:"Bizning qo'llab-quvvatlash xizmati sizga har qanday savolda yordam beradi va menejerlarning ",
            number:"+998 97 144-24-42"
        },
        {
            id:3,
            pic:Hand,
            name:"Kafolat",
            text:"Biz matraslarimiz uchun 8 yilgacha kafolat beramiz. Agar matras kamida 25 mm qisqartirilsa.",
            number:null

        }
    ]
  return (
    <div className='mb-20 mt-20'>
        <div className='container mx-auto'>
            <ProjectsTitle title={"Nega bizni tanlashadi?"}/>
        <div className='flex justify-between'>
            {
                boxes?.map((item)=>(
                    <div className='w-[400px] h-[500px] border-4 border-[#01384D]'>
                        <img className='object-cover w-[400px] mb-10' src={item.pic} alt="" />
                        <div className='text-center px-4'>
                            <h1 className='text-[24px] font-[700] text-[#01384D] mb-6'>{item.name}</h1>
                            <p className='text-blue-grey-300 mb-6'>{item.text}</p>
                            <h1 className='text-[18] text-[#01384D] font-[600] '>{item.number}</h1>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
    </div>
  )
}

export default Advantage