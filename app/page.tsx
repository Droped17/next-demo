import Image from "next/image";
import Card from "./components/Card";
import Button from "./components/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <article className="flex">
        <section>
          <h1>Make better coffee</h1>
          <p>why learn how to blog</p>
        </section>
        <section>
          <p>Image</p>
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
