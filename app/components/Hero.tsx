import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";

async function getData() {
  const query = "*[_type=='heroImages'][0]";

  const data = await client.fetch(query);
  return data;
}

const categories = [
  {
    name: "Men",
    href: "/men",
  },
  {
    name: "Women",
    href: "/women",
  },
  {
    name: "Teens",
    href: "/teens",
  },
];

export default async function Hero() {
  const data = await getData();

  return (
    <section className=" mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl  lg:px-12">
      <div className=" mb-8 flex flex-wrap lg:flex-nowrap md:mb-16">
        <div className=" mb-6 w-full flex flex-col justify-between lg:mb-0 sm:mb-12 lb:w-1/3 lg:pb-24 lg:pt-48">
          <h1 className="mb-4 text-4xl max-w-xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">
            Top Fashion for to price!
          </h1>
          <p className=" max-w-md leading-relaxed text-gray-500 text-lg">
            We sell only the most exclusive and high quality products for you.
            We are the best so come and shop with us.
          </p>
        </div>
        <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
          <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-6 md:top-16 lg:ml-0">
            <Image
              src={urlFor(data.image1).url()}
              alt="hero one"
              width={400}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className=" overflow-hidden rounded-lg bg-gray-100 shadow-lg">
            <Image
              src={urlFor(data.image2).url()}
              alt="hero one"
              width={400}
              height={500}
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className=" flex h-12 w-64 overflow-hidden border rounded-lg">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className=" flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200"
            >
              {category.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
