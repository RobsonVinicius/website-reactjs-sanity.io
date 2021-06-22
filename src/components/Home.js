import React from "react";
import image from "../images/home.jpg"

export default function Home() {
  return (
    <main>
      <img className="absolute object-cover w-full h-full" src={image} alt="Tecnology" />
      <section className="relative min-h-screen flex justify-center items-center">   
        <h1 className="text-6xl text-blue-100 font-bold leading-none lg:leading-snug pt-16">Aloha. I'm Robson.</h1>
      </section>
    </main>
  )
}