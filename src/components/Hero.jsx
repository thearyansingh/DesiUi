import React from 'react'

const Hero = () => {
  return (
    <>
<div
  className="hero  min-h-screen  container md:px-8 px-4 bg-base-200"
  style={{
    backgroundImage: "url('/images/back.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="hero-content text-center ">
    <div className="max-w-auto">
      <h3  className="fontone text-5xl text-red-500 font-bold ">Welcome</h3>
      <h1 className="text-6xl font-bold text-white">DESI TARKA</h1>
      <p className="lg:py-6 px-9 sm:px-16 font-semibold   text-white">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium perspiciatis maiores cumque, fugit pariatur repudiandae!   
      </p>
      <button className="btn bg-white text-black textarea-sm font-semibold px-10">Get Started</button>
    </div>
  </div>
</div>

    </>
  )
}

export default Hero
