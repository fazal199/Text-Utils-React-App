import React from 'react'

function About() {
  return (
    <section className='px-4 py-40 mobile-xs:py-32'>
        <h1 className='text-6xl font-semibold tracking-wider text-center uppercase mobile-xs:text-5xl'>About us</h1>
        <p className='max-w-5xl mx-auto mt-6 text-lg tracking-wide text-center capitalize mobile:text-sm mobile-xs:leading-6'>Text-utils is a tool by using which you can easily made manipulate your text and also you can make it readable.this tool is free to use and made by a beginner react developer fazal.the tool has been made in react also for css we have used tailwind css.</p>
        <p className='mt-5 text-lg font-semibold text-center capitalize'>tech stack : (<span className='text-red-500 uppercase'>html</span> ,<span className='text-blue-500'>tailwind</span> , <span className='text-blue-800'>react</span> )</p>
    </section>
  )
}

export default About
