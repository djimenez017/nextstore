import React from "react";
import Image from "next/image";
import formatPrice from "@/util/PriceFormat";
import { productType } from "@/types/ProductTypes";
import Link from "next/link";

export default function Product({
  name,
  image,
  unit_amount,
  id,
  description,
  metadata,
}: productType) {
  const { features } = metadata;
  console.log(features);
  return (
    <Link
      href={{
        pathname: `/product/${id}`,
        query: { name, image, unit_amount, id, description, features },
      }}
    >
      <div className="text-gray-700">
        <Image
          src={image}
          alt={name}
          width={800}
          height={800}
          className="w-full h-96 object-cover"
        />
        <div className="font-medium py-2">
          {" "}
          <h1 className="font-medium">{name}</h1>
          <h2 className="text-small text-teal-700">
            {unit_amount !== null ? formatPrice(unit_amount) : "N/A"}
          </h2>
        </div>
      </div>
    </Link>
  );
}
