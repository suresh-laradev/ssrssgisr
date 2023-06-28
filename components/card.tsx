import React from "react";
import { DataProps } from "@/types/types";

const Card = ({ data }: { data: DataProps }) => {
  return (
    <div className="bg-stone-950 rounded-md shadow-sm pt-10 px-6 relative min-h-max pb-4">
      <span className="absolute right-4 top-4 bg-amber-400 py-0 px-2 rounded-full text-gray-950 text-xs font-medium">
        Rating: {data.rating}
      </span>
      <h4 className="text-xl font-bold">{data.title}</h4>
      <p>{data.description}</p>
      <h6 className="text-end font-medium italic underline underline-offset-4">
        USD-{data.price}
      </h6>
    </div>
  );
};

export default Card;
