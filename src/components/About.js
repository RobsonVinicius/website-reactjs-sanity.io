import React, { useEffect, useState } from "react";
import sanityClient from "../client";
import home from "../images/home.jpg";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

export default function About() {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "author"]{
          name,
          "bio": bio[0].children[0].text,
          "authorImage": image.asset->url
      }`
      )
      .then((data) => setAuthor(data[0]))
      .catch(console.error);
  }, []);

  if (!author) return (
    <div className="h-full h-screen">
      <section className="flex flex-col align-center justify-center text-center">
        <h2 className="text-gray-800 text-3xl mt-10 mb-6">Loading...</h2>
      </section>
    </div>
  );

  return (
    <main>
      <img src={home} alt="home" className="absolute object-cover w-full h-full min-h-screen" />
      <div className="relative min-h-screen flex justify-center items-center">
        <section className="bg-indigo-800 rounded-lg shadow-2xl lg:flex lg:p-12">
          <img
            src={urlFor(author.authorImage).url()}
            className="rounded w-32 h-32 lg:w-64 lg:h-64 mr-8"
            alt="Robson"
          />
          <div className="text-lg flex flex-col justify-center">
            <h1 className="cursive text-6xl text-indigo-300 mb-4">
              Hey there. I'm{" "}
              <span className="text-indigo-100">{author.name}</span>
            </h1>
            <p className="text-indigo-200 text-lg">{author.bio}</p>
          </div>
        </section>
      </div>
    </main>
  );
}