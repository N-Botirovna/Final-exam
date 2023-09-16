import React from 'react'
import ProjectsTitle from '../../ui/ProjectsTitle'
import DreamBox from './DreamBox'
import TecBox from './TecBox'

const Technology = () => {
  return (
    <div className='container mx-auto'>
        <ProjectsTitle title={"Ishlab chiqish texnologiyasi"}/>
        <div>
        <TecBox/>
        <DreamBox/>
        </div>
    </div>
  )
}

export default Technology