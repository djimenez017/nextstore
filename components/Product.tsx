import React from "react";
import Image from "next/image";
import formatPrice from "@/util/PriceFormat";

export default function Product({ name, images, price }) {
  return (
    <div>
      <h1>{name}</h1>
      {formatPrice(price)}
      <Image src={images[0]} alt={name} width={400} height={400} />
    </div>
  );
}
