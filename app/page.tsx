"use client"

import Image from "next/image";
import Card from "./components/Card";
import Button from "./components/Button";
import { useEffect } from "react";


export default function Home() {

  useEffect(()=>{
    
  },[]);


  return (
    <main className="flex min-h-screen flex-col gap-2 items-center justify-between p-24">
      <article className="flex">
        
        <section>
          <h1>Make better coffee</h1>
          <p>why learn how to blog</p>
        </section>
        <section>
          <div className="w-[100%]">

        <Image alt="cat" src="/images/michael-sum-LEpfefQf4rU-unsplash.webp" width={600} height={500}/>
          </div>
        </section>
      </article>

      <article className="w-[80%]">
        <section className="flex">
          <div className="flex-1">
            <h1>long established</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos,
              architecto molestias accusamus nulla saepe voluptate? Natus quo
              ducimus dolores fugiat!
            </p>
          </div>
          <div className="flex-1">
            <p>Image</p>
          </div>
        </section>

        <section>
          <Card />
        </section>
      </article>

      <Button title={`See more`}/>
    </main>
  );
}
