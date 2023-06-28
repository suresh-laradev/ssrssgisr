import React, { Suspense } from "react";
import Card from "../../components/card";
import { DataProps } from "@/types/types";
const Dummy = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });
  const dataSet = await res.json();
  const products = dataSet.products;
  return (
    <Suspense fallback={<>loading...</>}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((aata: DataProps) => (
          <Card key={aata.id} data={aata} />
        ))}
      </div>
    </Suspense>
  );
};

export default Dummy;
