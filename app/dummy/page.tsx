import React, { lazy } from "react";
import Card from "../../components/card";
import { DataProps, ProductProps } from "@/types/types";

const fecthData = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  const dataSet = await res.json();
  const products = dataSet.products;
  return products;
};

const Dummy = lazy(async () => {
  const products = await fecthData();
  return { default: () => <Details data={products} /> };
});

const Details = ({ data }: ProductProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {data.map((aata: DataProps) => (
        <Card key={aata.id} data={aata} />
      ))}
    </div>
  );
};

export default Dummy;
