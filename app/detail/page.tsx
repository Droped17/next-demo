import Image from "next/image";

export default function Detail() {
  return (
    <div>
      <p>This is detail page</p>
      <p>IMAGE...</p>
      <div className="w-[80%]">
        <Image alt="cat" src="/images/michael-sum-LEpfefQf4rU-unsplash.webp" width={500} height={500}/>
      </div>
    </div>
  );
}
