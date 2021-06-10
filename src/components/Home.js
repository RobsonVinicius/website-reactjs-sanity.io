import React from "react";
import image from "../images/home.jpg"

export default function Home() {
  return (
    <main>
      <img className="absolute object-cover w-full h-full filter hue-rotate-180" src={image} alt="Tecnology" />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8"> 
        <h1 className="text-6xl text-blue-100 font-bold leading-none lg:leading-snug">Aloha. I'm Robson.</h1>
      </section>
    </main>
  )
}