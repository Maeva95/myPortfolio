import React from 'react'
import Form from '../../component/Form'
import './style.css'
import HeroImage2 from '../../component/HeroImg2'
import WorkImage from '../../assets/images/work-table.webp'

const Contact = () => {
  return (
    <>
      <HeroImage2 
        image={WorkImage}
        heading="CONTACT"
        text="N'hésitez pas à me contacter"
      />
      <div className='contact' id='contact'>
        <Form />
      </div>
    </>
  )
}

export default Contact