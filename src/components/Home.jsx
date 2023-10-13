import React from 'react'
import Textbox from './Textbox'

function Home() {
  return (
    <section className='px-6 py-16 mobile:px-3'>
       <div className='relative mx-auto max-w-center'>
          <h1 className='capitalize text-center text-heading-adjust font-semibold tracking-wide leading-[1.3] mobile:text-4xl'>enter your text here to perform operations.</h1>
      {/* ===================== Textbox ===================== */}
          <Textbox/>
       </div>
      </section>
  )
}

export default Home;
