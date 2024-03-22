import Link from "next/link";
import { client } from "../lib/sanity";
import { Product } from "../product";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getData() {
  const query = `*[_type=="product"] | order(createdAt desc){
        _id,
          price,
          name,
          "slug":slug.current,
          "categoryName":category->name,
          "imageUrl":images[0].asset->url
      }`;
  const data = await client.fetch(query);

  return data;
}

export default async function NewList() {
  const data: Product[] = await getData();

  return (
    <div className=" bg-white">
      <div className=" mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className=" flex justify-between items-center">
          <h2 className=" text-2xl tracking-tight text-gray-900 font-bold">
            {" "}
            Our New products
          </h2>
          <Link href="/all" className=" text-primary flex items-center gap-x-1">
            See All <ArrowRight />
          </Link>
        </div>
        <div className=" mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {data.map((produit) => (
            <div key={produit._id} className="group relative">
              <div className=" aspect-square w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75">
                <Image
                  src={produit.imageUrl}
                  alt={produit.name}
                  className="h-full w-full object-cover object-center"
                  width={300}
                  height={300}
                />
              </div>
              <div className=" mt-4 flex justify-between">
                <div>
                  <h3 className=" text-sm text-gray-700 font-semibold">
                    <Link href={`/product/${produit.slug}`}>
                      {produit.name}
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-500">
                    {produit.categoryName}
                  </p>
                </div>
                <p className="text-sm font-bold">${produit.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
