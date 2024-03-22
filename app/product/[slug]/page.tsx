import { client } from "@/app/lib/sanity";
import React from "react";

type PropsType = {
  params: any;
};

async function getData(slug: string) {
  const query = `*[_type=="product" && slug.current == "${slug}"]{
        _id,
          name,
          description,
          price,
          "imageUrl":images[1].asset->url,
            "categoryName":category->name,
          "slug":slug.current
      }`;
  const data = await client.fetch(query);
  console.log(data);
  return data;
}

export default async function ProductPage({ params }: PropsType) {
  const data = await getData(params.slug);

  return <div>{`Hello i am ${params.slug} product`}</div>;
}
